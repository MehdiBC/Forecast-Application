import { IsNotEmpty } from 'class-validator';

export class AuthenticationToken {
  @IsNotEmpty()
  accessToken: string;
}
