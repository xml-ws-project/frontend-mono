import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainAppRoutingModule } from './main-app-routing.module'
import { MainAppComponent } from './main-app.component'
import { NavbarComponent } from '../navbar/navbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { TicketCardComponent } from '../ticket/components/ticket-card/ticket-card/ticket-card.component'
import { TicketOverviewComponent } from '../ticket/components/tickets-overview/ticket-overview/ticket-overview.component'
import { LoaderModule } from '../shared/loader/loader.module'
import { AppModule } from '../app.module'
import { NoTicketComponent } from '../ticket/components/no-tickets/no-ticket/no-ticket.component'

@NgModule({
  declarations: [
    MainAppComponent,
    NavbarComponent,
    TicketCardComponent,
    TicketOverviewComponent,
    NoTicketComponent,
  ],
  imports: [CommonModule, RouterModule, MainAppRoutingModule, MatIconModule],
})
export class MainAppModule {}
