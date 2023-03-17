import { PassengerClass } from './../enum/PassengerClass.enum';
export interface SearchFlightDTO {
  takeOffDate: Date;
  landingDate: Date;
  preferredSeats: number;
  departurePlace: string;
  landingPlace: string;
  passengerClass: PassengerClass;
}
