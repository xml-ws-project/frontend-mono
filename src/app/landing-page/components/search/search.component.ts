import { SearchResult } from './../../../flights/class/SearchResult';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Flight } from './../../../flights/interface/Flight';
import { SearchFlightDTO } from './../../../flights/interface/SearchFlightDTO';
import { FlightService } from './../../../flights/service/flight.service';
import { Component, OnInit } from '@angular/core';
import { PassengerClass } from 'src/app/flights/enum/PassengerClass.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchDTO!: SearchFlightDTO;
  takeOffDate!: Date;
  landingDate!: Date;

  constructor(private flightService: FlightService, private router: Router, private toastrService: ToastrService) { }

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
        var searchResult: SearchResult = new SearchResult(response, this.searchDTO.passengerClass === 0 ? PassengerClass.ECONOMY : PassengerClass.BUSINESS, this.searchDTO.preferredSeats);
        this.flightService.changeData(searchResult, true);
        localStorage.setItem('travel_class', this.searchDTO.passengerClass.toString());
        this.router.navigate(['/search-result']);
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    )
  }



}
