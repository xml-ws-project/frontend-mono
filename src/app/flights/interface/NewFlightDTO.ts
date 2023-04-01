export interface NewFlightDTO {
  departurePlace: string;
  landingPlace: string;
  takeOffDateTime: Date;
  landingDateTime: Date;
  flightLayoutId: string;
  businessClassPrice: number;
  economyClassPrice: number;
}
