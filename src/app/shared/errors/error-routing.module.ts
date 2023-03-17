import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component'

const routes: Routes = [
  {
    path: 'notfound',
    component: NotfoundPageComponent,
    title: 'VIMA Airlines | Not Found',
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
