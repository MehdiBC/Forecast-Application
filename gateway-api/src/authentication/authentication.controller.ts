import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { AuthenticationToken } from './dto/token.authentication';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req): Promise<AuthenticationToken> {
    return await this.authService.login(req.user);
  }

  @Post('sign-up')
  async signUp(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AuthenticationToken> {
    return await this.authService.signUp(createUserDto);
  }
}
