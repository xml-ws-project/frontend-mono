import { Router } from '@angular/router';
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
  takeOffDate!: Date;
  landingDate!: Date;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.searchDTO = {
      takeOffDate: null as any,
      landingDate: null as any,
      preferredSeats: 1,
      departurePlace: '',
      landingPlace: '',
      passengerClass: 0
    }
  }

  search(): void {
    if (this.takeOffDate != null || this.takeOffDate != undefined) {
      var tempDate = this.takeOffDate.setHours(this.takeOffDate.getHours() + 1);
      this.searchDTO.takeOffDate = this.takeOffDate.toISOString();
    } else {
      this.searchDTO.takeOffDate = null as any;
    }
    if (this.landingDate != null || this.landingDate != undefined) {
      var tempDate = this.landingDate.setHours(this.landingDate.getHours() + 1);
      this.searchDTO.landingDate = this.landingDate.toISOString();
    } else {
      this.searchDTO.landingDate = null as any;
    }
    if (this.searchDTO.passengerClass != null) {
      this.searchDTO.passengerClass = parseInt(this.searchDTO.passengerClass.toString())
    } else {
      return;
    }
    this.flightService.searchFlights(this.searchDTO).subscribe(
      (response: Flight[]) => {
        this.flightService.changeData(response);
        localStorage.setItem('travel_class', this.searchDTO.passengerClass.toString());
        this.router.navigate(['/search-result']);
      },
      (error: HttpErrorResponse) => {
        //ubaciti toast service
      }
    )
  }



}
