import { SearchFlightDTO } from './../interface/SearchFlightDTO'
import { Flight } from './../interface/Flight'
import { Observable, BehaviorSubject } from 'rxjs'
import { NewFlightDTO } from './../interface/NewFlightDTO'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SearchResult } from '../class/SearchResult'
import { FlightLayout } from '../interface/FlightLayout'
import { AdminFlightDTO } from '../interface/AdminFlightDTO'

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiFlightURL = environment.flightsURL
  private apiFlightLayoutURL = environment.flightLayoutURL
  private flightSource = new BehaviorSubject(null as any)
  desiredFlights = this.flightSource.asObservable()

  constructor(private http: HttpClient) {
    let storedProp = localStorage.getItem('searchResult')
    if (storedProp) this.changeData(JSON.parse(storedProp), false)
  }

  changeData(data: SearchResult, storeProp: boolean = false) {
    if (storeProp) localStorage.setItem('searchResult', JSON.stringify(data))
    this.flightSource.next(data)
  }

  public addFlight(flight: NewFlightDTO): Observable<string> {
    return this.http.post<string>(`${this.apiFlightURL}/`, flight)
  }

  public getFlight(flightId: string): Observable<Flight> {
    return this.http.get<Flight>(`${this.apiFlightURL}/${flightId}`)
  }
  public getAdminFlight(flightId: string): Observable<AdminFlightDTO> {
    return this.http.get<AdminFlightDTO>(`${this.apiFlightURL}/${flightId}`)
  }

  public getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiFlightURL}/`)
  }

  public removeFlight(flightId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiFlightURL}/${flightId}`)
  }

  public searchFlights(dto: SearchFlightDTO): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.apiFlightURL}/search`, dto)
  }

  public getFlightLayouts(): Observable<FlightLayout> {
    return this.http.get<FlightLayout>(this.apiFlightLayoutURL)
  }
}
