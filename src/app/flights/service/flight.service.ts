import { browserRefresh } from './../../app.component';
import { SearchFlightDTO } from './../interface/SearchFlightDTO';
import { Flight } from './../interface/Flight';
import { Observable, BehaviorSubject } from 'rxjs';
import { NewFlightDTO } from './../interface/NewFlightDTO';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResult } from '../class/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiFlightURL = environment.flightsURL;
  private flightSource = new BehaviorSubject(null as any);
  desiredFlights = this.flightSource.asObservable();

  constructor(private http: HttpClient) {
    let storedProp = localStorage.getItem('searchResult');
    if (storedProp)
      this.changeData(JSON.parse(storedProp), false)
  }

  changeData(data: SearchResult, storeProp: boolean = false) {
    if (storeProp)
      localStorage.setItem('searchResult', JSON.stringify(data));
    this.flightSource.next(data);
  }

  deleteData(): void {
    if (!browserRefresh) {
      localStorage.removeItem('searchResult');
    }
  }

  public addFlight(flight: NewFlightDTO): Observable<string> {
    return this.http.post<string>(`${this.apiFlightURL}/`, flight);
  }

  public getFlight(flightId: string): Observable<Flight> {
    return this.http.get<Flight>(`${this.apiFlightURL}/${flightId}`);
  }

  public getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiFlightURL}/`);
  }

  public removeFlight(flightId: string): Observable<string> {
    return this.http.delete<string>(`${this.apiFlightURL}/${flightId}`);
  }

  public searchFlights(dto: SearchFlightDTO): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.apiFlightURL}/search`, dto);
  }
}
