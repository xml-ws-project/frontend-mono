import { PassengerClass } from "./PassengerClass"

export interface TicketDTO{
     id : string 
     price : number 
     seatNumber : number 
     additionalLuggage : boolean
     departurePlace : string
     landingPlace : string
     takeOffDateTime : Date 
     landingDateTime : Date  
     firstname : string 
     lastname : string 
     passengerClass : number  
}