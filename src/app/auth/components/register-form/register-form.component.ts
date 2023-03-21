import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public isRegistering: boolean = false
  public isMale: string
  public showError: boolean
  public errorMessage: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.value.gender == undefined) {
      this.showError = true
      this.errorMessage = 'Please select your gender.'
      this.toastr.error('Please select your gender.')
      return
    }
    this.isRegistering = true
    this.authService.register(form.value).subscribe(
      (response: string) => {
        this.toastr.success(response)
        this.router.navigate([''])
        this.isRegistering = false
      },
      (errorMessage) => {
        this.toastr.error(errorMessage)
        this.isRegistering = false
        this.showError = true
        this.errorMessage = errorMessage
      },
    )
  }
}
