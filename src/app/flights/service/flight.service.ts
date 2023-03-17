import { SearchFlightDTO } from './../interface/SearchFlightDTO';
import { Flight } from './../interface/Flight';
import { Observable } from 'rxjs';
import { NewFlightDTO } from './../interface/NewFlightDTO';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiFlightURL = environment.flightsURL;

  constructor(private http: HttpClient) { }

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
