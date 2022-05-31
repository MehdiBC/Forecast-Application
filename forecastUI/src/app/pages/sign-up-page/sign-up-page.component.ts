import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {SignUpCredentials} from "../../models/dtos/sign-up-credentials";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationToken} from "../../models/dtos/authentication-token";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  public readonly signUpForm: FormGroup
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  signUp(credentials: SignUpCredentials) {
    this.authService.signUp(credentials).subscribe({
      next: (jwt: AuthenticationToken) => {
        localStorage.setItem('jwt', jwt.accessToken);
      },
      complete: () => {
        this.route.navigateByUrl('').catch((e)=>console.log(e));
      }
    });
  }
}
