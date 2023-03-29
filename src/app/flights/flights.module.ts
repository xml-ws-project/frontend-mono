import { FlightCardResComponent } from './components/flight-card-res/flight-card-res.component'
import { MainSearchResComponent } from './components/main-search-res/main-search-res.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DividerModule } from 'primeng/divider'
import { ToastModule } from 'primeng/toast'
import { CreateFlightPageComponent } from './components/create-flight-page/create-flight-page.component'
import { CreateFlightFormComponent } from './components/create-flight-form/create-flight-form.component'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoaderModule } from '../shared/loader/loader.module'

@NgModule({
  declarations: [
    MainSearchResComponent,
    FlightCardResComponent,
    CreateFlightPageComponent,
    CreateFlightFormComponent,
  ],
  imports: [
    CommonModule,
    DividerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    LoaderModule,
    MatSelectModule,
  ],
})
export class FlightsModule {}
