import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { FlightService } from '../../service/flight.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-create-flight-form',
  templateUrl: './create-flight-form.component.html',
  styleUrls: ['./create-flight-form.component.scss'],
})
export class CreateFlightFormComponent implements OnInit {
  public form: FormGroup
  public layouts: any
  public minTakeOffDate = new Date()
  public minLandingDate = new Date()
  public takeOffDate: any
  public landingDate: any

  constructor(
    private router: Router,
    private flightService: FlightService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.flightService.getFlightLayouts().subscribe((response) => {
      this.layouts = response
    })
    this.form = new FormGroup({
      departurePlace: new FormControl(undefined, Validators.required),
      landingPlace: new FormControl(undefined, Validators.required),
      economyClassPrice: new FormControl(undefined, Validators.required),
      businessClassPrice: new FormControl(undefined, Validators.required),
      flightLayoutId: new FormControl(undefined, Validators.required),
      takeOffDateTime: new FormControl(undefined, Validators.required),
      landingDateTime: new FormControl(undefined, Validators.required),
    })
  }
  validateDate() {
    this.minLandingDate = this.form.value.takeOffDateTime
  }

  onSubmit() {
    this.takeOffDate = this.form.value.takeOffDateTime
    this.landingDate = this.form.value.landingDateTime
    this.takeOffDate.setHours(this.takeOffDate.getHours() + 2)
    this.takeOffDate = this.takeOffDate.toISOString()
    this.landingDate.setHours(this.landingDate.getHours() + 2)
    this.landingDate = this.landingDate.toISOString()
    this.form.patchValue({
      takeOffDateTime: this.takeOffDate,
      landingDateTime: this.landingDate,
    })
    console.log(this.form.value)

    this.flightService.addFlight(this.form.value).subscribe(
      (response: string) => {
        this.toastr.success('Flight successfully created.')
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Something went wrong, please try again.')
      },
    )
  }
}
