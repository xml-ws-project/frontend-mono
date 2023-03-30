import { MainSearchResComponent } from './../flights/components/main-search-res/main-search-res.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { LandingPageComponent } from '../landing-page/components/landing-page/landing-page.component'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { CreateFlightPageComponent } from '../flights/components/create-flight-page/create-flight-page.component'
import { ShowFlightPageComponent } from '../flights/components/show-flight-page/show-flight-page.component'

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
    path: 'search-result',
    component: MainSearchResComponent,
  },
  {
    path: 'create-flight',
    component: CreateFlightPageComponent,
    title: 'VIMA Airlines | Create Flight',
  },
  {
    path: 'show-flight/:id',
    component: ShowFlightPageComponent,
    title: 'VIMA Airlines | Flight',
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
