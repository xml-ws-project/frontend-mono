import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component'
import { CardModule } from 'primeng/card'
import { CalendarModule } from 'primeng/calendar'
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber'

@NgModule({
  declarations: [LandingPageComponent, SearchComponent],
  imports: [CommonModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule
  ],
})
export class LandingPageModule { }
