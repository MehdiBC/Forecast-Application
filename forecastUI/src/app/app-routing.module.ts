import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInPageComponent} from "./pages/sign-in-page/sign-in-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {Error404PageComponent} from "./pages/error404-page/error404-page.component";
import {ForecastPageComponent} from "./pages/forecast-page/forecast-page.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: '', component: ForecastPageComponent, canActivate: [AuthenticationGuard]},
  {path: 'sign-in', component: SignInPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: '404', component: Error404PageComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
