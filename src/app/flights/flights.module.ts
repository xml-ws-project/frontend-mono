import { FlightCardResComponent } from './components/flight-card-res/flight-card-res.component';
import { MainSearchResComponent } from './components/main-search-res/main-search-res.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainSearchResComponent, FlightCardResComponent],
  imports: [
    CommonModule,
    DividerModule,
    ToastModule,
    DialogModule,
    SelectButtonModule,
    FormsModule
  ]
})
export class FlightsModule { }
