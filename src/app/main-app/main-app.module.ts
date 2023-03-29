import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainAppRoutingModule } from './main-app-routing.module'
import { MainAppComponent } from './main-app.component'
import { NavbarComponent } from '../navbar/navbar.component'
import { FooterComponent } from '../footer/footer.component'

@NgModule({
  declarations: [MainAppComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MainAppRoutingModule],
})
export class MainAppModule {}
