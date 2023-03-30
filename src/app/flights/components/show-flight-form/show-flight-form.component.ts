import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { PassengerClass } from '../../enum/PassengerClass.enum'
import { AdminFlightDTO } from '../../interface/AdminFlightDTO'
import { Flight } from '../../interface/Flight'
import { FlightService } from '../../service/flight.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http'
@Component({
  selector: 'app-show-flight-form',
  templateUrl: './show-flight-form.component.html',
  styleUrls: ['./show-flight-form.component.scss'],
})
export class ShowFlightFormComponent implements OnInit {
  id: string
  flight: AdminFlightDTO = {
    flightDTO: {
      id: '0',
      departurePlace: '',
      landingPlace: '',
      landingDateTime: new Date(),
      takeOffDateTime: new Date(),
      pricelist: new Map(),
    },
    remainingBussines: 0,
    remainingEconomy: 0,
  }
  economyPrice: number
  businessPrice: number
  pricelist: any
  isDeleting: boolean = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flightService: FlightService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.flightService.getAdminFlight(this.id).subscribe((respone) => {
      this.flight = respone
      this.pricelist = this.flight.flightDTO.pricelist
      this.economyPrice = this.flight.flightDTO.pricelist[PassengerClass.ECONOMY]
      this.businessPrice = this.flight.flightDTO.pricelist[PassengerClass.BUSINESS]
    })
  }
  Delete() {
    this.isDeleting = true
    this.flightService.removeFlight(this.id).subscribe(
      (response: string) => {
        this.isDeleting = false
        this.toastr.success(response)
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        this.isDeleting = false
        console.log(error)
        this.toastr.error(error.error)
      },
    )
  }
}
