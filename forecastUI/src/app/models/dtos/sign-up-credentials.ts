import {Role} from "../enums/role.enum";

export class SignUpCredentials {
  constructor(
    public email: string,
    public password: string,
    public role: Role,
  ) {
  }
}
