import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { MainAppComponent } from './main-app/main-app.component';


const routes: Routes = [
  {
    path: 'app',
    component: MainAppComponent,
    loadChildren: () =>
      import('./main-app/main-app.module').then((x) => x.MainAppModule),
    title: 'Care Connect',
  },
  {
    path: '',
    component: LandingPageComponent,
    title: 'VIMA Airlines'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login | VIMA Airlines'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
