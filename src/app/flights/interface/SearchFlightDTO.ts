import { PassengerClass } from './../enum/PassengerClass.enum';
export interface SearchFlightDTO {
  takeOffDate: String;
  landingDate: String;
  preferredSeats: number;
  departurePlace: string;
  landingPlace: string;
  passengerClass: number;
}
