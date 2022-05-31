import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LoginCredentials} from "../../models/dtos/login-credentials";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationToken} from "../../models/dtos/authentication-token";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  public readonly signInForm: FormGroup

  constructor(
    private readonly authService: AuthService,
    private readonly route: Router
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  login(credentials: LoginCredentials): void {
    this.authService.login(credentials).subscribe({
      next: (jwt: AuthenticationToken) => {
        localStorage.setItem('jwt', jwt.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.route.navigateByUrl('').catch((e)=>console.log(e));
      }
    });
  }
}
