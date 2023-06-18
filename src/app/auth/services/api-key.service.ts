import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({ providedIn: 'root' })
export class ApiKeyService {
  private apiUrl = environment.apiKeyURL

  constructor(private toastr: ToastrService, private http: HttpClient) {}

  public getUserKeys(userId): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`)
  }

  public createKey(dto): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dto)
  }
}
