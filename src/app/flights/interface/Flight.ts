import { PassengerClass } from "../enum/PassengerClass.enum";

export interface Flight {
  id: string;
  departurePlace: string;
  landingPlace: string;
  takeOffDateTime: Date;
  landingDateTime: Date;
  pricelist: Map<PassengerClass, number>;
}
