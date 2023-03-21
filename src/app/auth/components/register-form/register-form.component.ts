import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'

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
    private toastr: CustomToastrService,
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.value.gender == undefined) {
      this.showError = true
      this.errorMessage = 'Please select your gender.'
      this.toastr.error(null, 'Please select your gender.', ToasterPosition.topCenter)
      return
    }
    this.isRegistering = true
    this.authService.register(form.value).subscribe(
      (response: string) => {
        this.toastr.success(null, response, ToasterPosition.topCenter)
        this.router.navigate([''])
        this.isRegistering = false
      },
      (errorMessage) => {
        this.toastr.error(null, errorMessage, ToasterPosition.topCenter)
        this.isRegistering = false
        this.showError = true
        this.errorMessage = errorMessage
      },
    )
  }
}
