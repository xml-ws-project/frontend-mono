import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainAppRoutingModule } from './main-app-routing.module'
import { MainAppComponent } from './main-app.component'
import { NavbarComponent } from '../navbar/navbar.component'
import { FooterComponent } from '../footer/footer.component'
import { MatIconModule } from '@angular/material/icon'
import { TicketCardComponent } from '../ticket/components/ticket-card/ticket-card/ticket-card.component'
import { TicketOverviewComponent } from '../ticket/components/tickets-overview/ticket-overview/ticket-overview.component'
import { NoTicketComponent } from '../ticket/components/no-tickets/no-ticket/no-ticket.component'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

@NgModule({
  declarations: [
    MainAppComponent,
    NavbarComponent,
    TicketCardComponent,
    TicketOverviewComponent,
    NoTicketComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, MainAppRoutingModule, MatIconModule],
})
export class MainAppModule {}
