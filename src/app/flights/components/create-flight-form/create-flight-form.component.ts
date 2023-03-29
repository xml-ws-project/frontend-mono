import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { FlightService } from '../../service/flight.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-create-flight-form',
  templateUrl: './create-flight-form.component.html',
  styleUrls: ['./create-flight-form.component.scss'],
})
export class CreateFlightFormComponent implements OnInit {
  public form: FormGroup
  public isCreating: boolean = false
  public layouts: any

  constructor(private router: Router, private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService.getFlightLayouts().subscribe((response) => {
      this.layouts = response
    })
    this.form = new FormGroup({
      departurePlace: new FormControl(undefined, Validators.required),
      landingPlace: new FormControl(undefined, Validators.required),
      economyClassPrice: new FormControl(undefined, Validators.required),
      businessClassPrice: new FormControl(undefined, Validators.required),
      flightLayoutId: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
