import { PassengerClass } from './../../enum/PassengerClass.enum';
import { FlightService } from './../../service/flight.service';
import { Flight } from './../../interface/Flight';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-search-res',
  templateUrl: './main-search-res.component.html',
  styleUrls: ['./main-search-res.component.scss']
})
export class MainSearchResComponent implements OnInit {

  flights: Flight[];
  passengerClass: PassengerClass;
  selectedFlight: Flight;
  isSelected: boolean = false;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.flightService.desiredFlights.subscribe(x => {
      this.flights = x.flights;
      this.passengerClass = x.passengerClass;
    });
    this.isSelected = false;
    this.selectedFlight = null;
  }

  back(): void {
    this.router.navigate(['/']);
  }

  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    this.isSelected = true;
  }

}