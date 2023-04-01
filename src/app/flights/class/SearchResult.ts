import { PassengerClass } from './../enum/PassengerClass.enum';
import { Flight } from './../interface/Flight';
export class SearchResult {
  flights: Flight[];
  passengerClass: PassengerClass;
  numberOfTickets: number;

  constructor(flights: Flight[], passengerClass: PassengerClass, numberOfTickets: number) {
    this.flights = flights;
    this.passengerClass = passengerClass;
    this.numberOfTickets = numberOfTickets;
  }
}
