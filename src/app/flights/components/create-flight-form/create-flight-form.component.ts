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
  public isCreating: boolean = false
  public layouts: any

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
    })
  }

  onSubmit() {
    this.isCreating = true
    this.flightService.addFlight(this.form.value).subscribe(
      (response: string) => {
        this.isCreating = false
        this.toastr.success('Flight successfully created.')
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        this.isCreating = false
        this.toastr.error('Something went wrong, please try again.')
        window.location.reload()
      },
    )
  }
}
