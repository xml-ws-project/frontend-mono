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
import { LoaderModule } from '../shared/loader/loader.module';
import { ShowFlightFormComponent } from './components/show-flight-form/show-flight-form.component';
import { ShowFlightPageComponent } from './components/show-flight-page/show-flight-page.component'

@NgModule({
  declarations: [
    MainSearchResComponent,
    FlightCardResComponent,
    CreateFlightPageComponent,
    CreateFlightFormComponent,
    ShowFlightFormComponent,
    ShowFlightPageComponent,
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
