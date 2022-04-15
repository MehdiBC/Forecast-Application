import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../authentication.service';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<LoginUserDto> {
    const validUser: LoginUserDto = await this.authService.validateUser(
      email,
      password,
    );
    if (!validUser) {
      throw new UnauthorizedException('Bad credentials');
    }
    return validUser;
  }
}
