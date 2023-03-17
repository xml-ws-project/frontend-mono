import { HttpErrorResponse } from '@angular/common/http';
import { Flight } from './../../../flights/interface/Flight';
import { SearchFlightDTO } from './../../../flights/interface/SearchFlightDTO';
import { FlightService } from './../../../flights/service/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchDTO!: SearchFlightDTO;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.searchDTO = {
      takeOffDate: null as any,
      landingDate: null as any,
      preferredSeats: 0,
      departurePlace: '',
      landingPlace: '',
      passengerClass: null as any
    }
  }

  search(): void {
    this.flightService.searchFlights(this.searchDTO).subscribe(
      (response: Flight[]) => {

      },
      (error: HttpErrorResponse) => {

      }
    )
  }



}
