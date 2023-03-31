import { CreateTicketDTO } from 'src/app/ticket/interface/CreateTicketDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TicketDTO } from '../interface/TicketDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticketUrl = environment.ticketURL;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  public PurchaseTickets(dto: CreateTicketDTO): Observable<boolean> {
    return this.http.post<boolean>(`${this.ticketUrl}/`, dto);
  }

  public GetTicketsForUser(userId: string): Observable<TicketDTO[]> {
    return this.http
      .get<TicketDTO[]>(`${this.ticketUrl}/` + userId);
  }
}
