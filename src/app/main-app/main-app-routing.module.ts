import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { LandingPageComponent } from '../landing-page/components/landing-page/landing-page.component'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'


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
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
