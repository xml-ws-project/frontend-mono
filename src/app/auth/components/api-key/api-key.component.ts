import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss'],
})
export class ApiKeyComponent implements OnInit {
  public form: FormGroup
  public hasKey: boolean = true
  public key = ''
  public expireIn = ''

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      expireIn: new FormControl(null, Validators.required),
    })
  }

  onFormSubmit() {
    console.log(this.form.value)
  }
}
