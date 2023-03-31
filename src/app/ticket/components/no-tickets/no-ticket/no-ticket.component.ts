import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-no-ticket',
  templateUrl: './no-ticket.component.html',
  styleUrls: ['./no-ticket.component.scss'],
})
export class NoTicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate([''])
  }
}
