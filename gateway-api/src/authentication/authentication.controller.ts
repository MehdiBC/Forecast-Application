import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthenticationToken } from './dto/token.authentication';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req): AuthenticationToken {
    return this.authService.login(req.user);
  }

  @Post('sign-up')
  async signUp(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AuthenticationToken> {
    return await this.authService.signUp(createUserDto);
  }
}
