import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms'
import { LoaderModule } from '../shared/loader/loader.module'

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [CommonModule, MatCheckboxModule, FormsModule, LoaderModule],
})
export class AuthModule {}
