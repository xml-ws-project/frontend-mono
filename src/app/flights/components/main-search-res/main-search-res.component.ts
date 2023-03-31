import { PassengerClass } from './../../enum/PassengerClass.enum';
import { FlightService } from './../../service/flight.service';
import { Flight } from './../../interface/Flight';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CreateTicketDTO } from 'src/app/ticket/interface/CreateTicketDTO';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TicketService } from 'src/app/ticket/service/ticket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-search-res',
  templateUrl: './main-search-res.component.html',
  styleUrls: ['./main-search-res.component.scss']
})
export class MainSearchResComponent implements OnInit, OnDestroy {

  flights!: Flight[];
  passengerClass: PassengerClass;
  selectedFlight: Flight;
  isSelected: boolean = false;
  createTicket: CreateTicketDTO;
  numberOfTickets: number;
  userId: string;
  visible: boolean = false;
  additionalLuggage: boolean = false;
  stateOptions: any[] = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

  constructor(private flightService: FlightService, private router: Router, private toastrService: ToastrService, private authService: AuthService, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.createTicket = {
      seatNumbers: [],
      userId: '',
      flightId: '',
      additionalLuggage: false,
      passengerClass: null as any,
      numberOfTickets: this.numberOfTickets,
    };
    this.flightService.desiredFlights.subscribe(x => {
      this.flights = x.flights;
      this.passengerClass = x.passengerClass;
      this.numberOfTickets = x.numberOfTickets;
    });
    this.isSelected = false;
    this.selectedFlight = null;
  }

  showDialog(): void {
    this.visible = true;
  }

  ngOnDestroy(): void {
    this.flightService.deleteData();
  }

  back(): void {
    this.router.navigate(['/']);
  }

  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    this.isSelected = true;
  }

  buy(): void {
    this.authService.user.subscribe(user => this.userId = user.id);
    this.createTicket = {
      seatNumbers: [],
      userId: '1a08fe64-fa5b-488c-b32e-db3183987961',
      flightId: this.selectedFlight.id,
      additionalLuggage: this.additionalLuggage,
      passengerClass: this.passengerClass === 'ECONOMY' ? 0 : 1,
      numberOfTickets: this.numberOfTickets,
    }
    this.ticketService.PurchaseTickets(this.createTicket).subscribe(
      (response: boolean) => {
        this.visible = false;
        if (response == true) {
          this.toastrService.success('Purchase successfully completed.');
          this.router.navigate(['/']);
        }
        else {
          this.toastrService.info('Something went wrong during purchase process.');
        }
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    )
  }

}
