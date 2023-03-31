import { MainSearchResComponent } from './../flights/components/main-search-res/main-search-res.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { LandingPageComponent } from '../landing-page/components/landing-page/landing-page.component'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { TicketCardComponent} from '../ticket/components/ticket-card/ticket-card/ticket-card.component'
import { TicketOverviewComponent } from '../ticket/components/tickets-overview/ticket-overview/ticket-overview.component'


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'VIMA Airlines',
  },
  {
    path: '*',
    component: NotfoundPageComponent,
  },
  {
    path:'ticket',
    component:TicketCardComponent,
  },
  {
    path: 'user/tickets',
    component : TicketOverviewComponent,
  },
  {
    path: 'search-result',
    component: MainSearchResComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule { }
