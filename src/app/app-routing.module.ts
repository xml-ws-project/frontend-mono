import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainAppComponent } from './main-app/main-app.component'
import { LoginPageComponent } from './auth/components/login-page/login-page.component'
import { ErrorPageComponent } from './shared/errors/error-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    loadChildren: () => import('./main-app/main-app.module').then((x) => x.MainAppModule),
    title: 'VIMA Airlines',
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    loadChildren: () => import('./shared/errors/errors.module').then((x) => x.ErrorsModule),
    title: 'Error',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'VIMA Airlines | Login',
  },
  {
    path: '**',
    redirectTo: '/error/notfound',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
