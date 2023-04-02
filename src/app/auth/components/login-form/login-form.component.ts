import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public defaultRemember = true
  public showError: boolean = false
  public errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  onHome() {
    this.router.navigate([''])
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (response: string) => {
        this.toastr.success('You have been successfully logged in.', 'Welcome back!')
        this.router.navigate([''])
      },
      (errorMessage) => {
        this.showError = true
        this.errorMessage = errorMessage
      },
    )
  }
}
