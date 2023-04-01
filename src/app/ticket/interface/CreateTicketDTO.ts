export interface CreateTicketDTO {
  seatNumbers: number[];
  userId: string;
  flightId: string;
  additionalLuggage;
  passengerClass: number;
  numberOfTickets: number;
}
