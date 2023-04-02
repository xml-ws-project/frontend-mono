import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public isRegistering: boolean = false
  public showError: boolean
  public errorMessage: string
  public form: FormGroup

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: CustomToastrService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(undefined, Validators.required),
      lastName: new FormControl('', Validators.required),
      jmbg: new FormControl(undefined, Validators.required),
      isMale: new FormControl(undefined, Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
    })
  }
  onFormSubmit() {
    this.isRegistering = true
    this.authService.register(this.form.value).subscribe(
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
