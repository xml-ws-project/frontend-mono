import { PassengerClass } from './../enum/PassengerClass.enum';
import { Flight } from './../interface/Flight';
export class SearchResult {
  flights: Flight[];
  passengerClass: PassengerClass;
  constructor(flights: Flight[], passengerClass: PassengerClass) {
    this.flights = flights;
    this.passengerClass = passengerClass;
  }
}
