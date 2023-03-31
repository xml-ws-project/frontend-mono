import { Component, Input, OnInit } from '@angular/core'
import { SelectControlValueAccessor } from '@angular/forms'
import { PassengerClass } from 'src/app/ticket/interface/PassengerClass'
import { TicketDTO } from 'src/app/ticket/interface/TicketDTO'

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent implements OnInit {
  borderColor = ''
  backgroundColor = ''
  departureDate = ''
  landingDate = ''
  class = ''
  additionalLuggage = ''
  isEconomy = true
  @Input() ticketDTO: TicketDTO

  constructor() {}

  ngOnInit(): void {
    this.setColour(this.ticketDTO.passengerClass)
    this.class = this.setPassengerClass(this.ticketDTO.passengerClass)
    this.departureDate = this.SetTime(this.ticketDTO.takeOffDateTime)
    this.landingDate = this.SetTime(this.ticketDTO.landingDateTime)
    this.setAdditionalLuggage(this.ticketDTO.additionalLuggage)
  }

  setPassengerClass(num) {
    var pClass = ''
    if (num == 0) {
      pClass = 'Economy'
    } else pClass = 'Bussiness'
    return pClass
  }

  setColour(numb: number) {
    if (numb == 1) {
      this.isEconomy = false
    } else this.isEconomy
  }

  SetTime(date: Date) {
    var s = date.toString()
    var time = s.substring(0, 10) + ' ' + s.substring(11, 16)
    return time
  }
  setAdditionalLuggage(bool: boolean) {
    if (bool == false) {
      this.additionalLuggage = '-'
    } else this.additionalLuggage = '+'
  }
}
