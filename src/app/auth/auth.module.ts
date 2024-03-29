import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms'
import { LoaderModule } from '../shared/loader/loader.module'
import { RegisterFormComponent } from './components/register-form/register-form.component'
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { HomeButtonComponent } from '../shared/components/home-button/home-button.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ToastrModule } from 'ngx-toastr'
import { ReactiveFormsModule } from '@angular/forms'
import { ApiKeyComponent } from './components/api-key/api-key.component'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    HomeButtonComponent,
    ApiKeyComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    LoaderModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
  ],
})
export class AuthModule {}
