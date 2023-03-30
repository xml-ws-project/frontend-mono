import { PassengerClass } from './../../enum/PassengerClass.enum'
import { FlightService } from './../../service/flight.service'
import { Flight } from './../../interface/Flight'
import { Component, Input, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
import { AuthService } from 'src/app/auth/services/auth.service'
import { AdminFlightDTO } from '../../interface/AdminFlightDTO'

@Component({
  selector: 'app-main-search-res',
  templateUrl: './main-search-res.component.html',
  styleUrls: ['./main-search-res.component.scss'],
})
export class MainSearchResComponent implements OnInit {
  flights: Flight[]
  passengerClass: PassengerClass
  selectedFlight: Flight
  isSelected: boolean = false
  public role: string
  public email: string
  public isLogged: boolean = false
  adminFlightDTO: AdminFlightDTO

  constructor(
    private flightService: FlightService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.flightService.desiredFlights.subscribe((x) => {
      this.flights = x.flights
      this.passengerClass = x.passengerClass
    })
    this.isSelected = false
    this.selectedFlight = null

    this.authService.user.subscribe((user) => {
      if (user == null) return
      this.email = user.email
      this.role = user.role
    })
  }

  back(): void {
    this.router.navigate(['/'])
  }

  onSelect(flight: Flight): void {
    this.selectedFlight = flight
    this.isSelected = true
  }
  onInfo() {
    //console.log(this.selectedFlight.id)
    this.router.navigate(['/show-flight/' + this.selectedFlight.id])
  }
}
