import { PassengerClass } from './../../enum/PassengerClass.enum';
import { Flight } from './../../interface/Flight';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-card-res',
  templateUrl: './flight-card-res.component.html',
  styleUrls: ['./flight-card-res.component.scss']
})
export class FlightCardResComponent implements OnInit {

  @Input() currentFlight: Flight;
  @Input() chosenClass: PassengerClass;

  price: number;

  constructor() { }

  ngOnInit(): void {
    this.price = this.currentFlight.pricelist[this.chosenClass];
  }

}
