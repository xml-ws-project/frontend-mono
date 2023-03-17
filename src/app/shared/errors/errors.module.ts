import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component'
import { ErrorPageComponent } from './error-page.component'
import { RouterModule } from '@angular/router'
import { ErrorRoutingModule } from './error-routing.module'

@NgModule({
  declarations: [NotfoundPageComponent, ErrorPageComponent],
  imports: [CommonModule, ErrorRoutingModule, RouterModule],
})
export class ErrorsModule {}
