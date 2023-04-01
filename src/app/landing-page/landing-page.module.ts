import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { SearchComponent } from './components/search/search.component'
import { CardModule } from 'primeng/card'
import { CalendarModule } from 'primeng/calendar'
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber'
import { MatCardModule } from '@angular/material/card'
import { DividerModule } from 'primeng/divider'
import { RadioButtonModule } from 'primeng/radiobutton'
import { OverlayPanelModule } from 'primeng/overlaypanel'

@NgModule({
  declarations: [LandingPageComponent, SearchComponent],
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    MatCardModule,
    DividerModule,
    RadioButtonModule,
    OverlayPanelModule,
    FormsModule,
  ],
})
export class LandingPageModule {}
