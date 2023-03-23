import { FlightCardResComponent } from './components/flight-card-res/flight-card-res.component';
import { MainSearchResComponent } from './components/main-search-res/main-search-res.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [MainSearchResComponent, FlightCardResComponent],
  imports: [
    CommonModule,
    DividerModule,
    ToastModule
  ]
})
export class FlightsModule { }
