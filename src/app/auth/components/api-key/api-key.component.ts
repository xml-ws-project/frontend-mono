import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { ApiKeyService } from '../../services/api-key.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss'],
})
export class ApiKeyComponent implements OnInit {
  public form: FormGroup
  public hasKey: boolean = false
  public userId: string = ''
  public keys = []

  constructor(
    private toastr: ToastrService,
    private keyService: ApiKeyService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      expireIn: new FormControl(null, Validators.required),
    })

    this.authService.user.subscribe((user) => {
      this.userId = user.id
      return
    })

    this.getUserKeys()
  }

  onFormSubmit() {
    const dto = {
      userId: this.userId,
      expireIn: this.form.value.expireIn,
    }

    this.keyService.createKey(dto).subscribe((response) => {
      if (response === null) {
        this.toastr.error('Something went wrong...')
        return
      }

      this.toastr.success('API key created!')
      this.getUserKeys()
    })
  }

  getUserKeys() {
    this.keyService.getUserKeys(this.userId).subscribe((response) => {
      if (response === null) {
        this.hasKey = false
        return
      }

      this.hasKey = true
      this.keys = response
    })
  }
}
