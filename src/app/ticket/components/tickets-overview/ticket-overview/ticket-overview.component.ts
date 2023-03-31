import { Component, OnInit } from '@angular/core'
import { TicketDTO } from 'src/app/ticket/interface/TicketDTO'
import { TicketCardComponent } from '../../ticket-card/ticket-card/ticket-card.component'
import { TicketService } from 'src/app/ticket/service/ticket.service'
import { HttpErrorResponse } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/auth/services/auth.service'

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss'],
})
export class TicketOverviewComponent implements OnInit {
  public isLoading: boolean = false
  public id: string
  constructor(
    private ticketService: TicketService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  tickets: TicketDTO[]
  noTickets = false

  ngOnInit(): void {
    this.isLoading = true
    this.authService.user.subscribe((user) => {
      this.id = user == null ? '-1' : user.id
    })
    this.ticketService.GetTicketsForUser(`${this.id}`).subscribe(
      (response: TicketDTO[]) => {
        this.isLoading = false
        this.tickets = response
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Something went wrong, please try reloading the page.')
      },
    )
  }

  ngDoCheck() {
    if (this.tickets == null) {
      this.noTickets = true
      console.log('Ovdee saaaam' + this.noTickets)
    }
  }
}
