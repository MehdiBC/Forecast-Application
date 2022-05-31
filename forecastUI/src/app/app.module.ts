import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import {HttpClientModule} from "@angular/common/http";
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbStepperModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbDatepickerModule, NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {AuthenticationInterceptorProvider} from "./interceptors/authentication.interceptor";
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import {AuthenticationGuard} from "./guards/authentication.guard";
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    Error404PageComponent,
    ForecastPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbListModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NgChartsModule
  ],
  providers: [AuthenticationInterceptorProvider, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
