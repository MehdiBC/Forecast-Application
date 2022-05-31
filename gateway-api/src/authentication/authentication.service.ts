import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthenticationToken } from './dto/token.authentication';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<LoginUserDto> {
    const userInDb = await this.userService.findOneByEmail(email);
    if (userInDb) {
      const isMatch = await bcrypt.compare(password, userInDb.password);
      if (isMatch) {
        return {
          id: userInDb.id,
          email: userInDb.email,
        };
      }
    }
    return null;
  }

  login(user: LoginUserDto): AuthenticationToken {
    const payload = {
      username: user.email,
      sub: user.id,
    };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto): Promise<AuthenticationToken> {
    const user = await this.userService.create(createUserDto);
    return this.login(user);
  }
}
