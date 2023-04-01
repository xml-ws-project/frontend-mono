import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { User } from '../model/user.module'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { LoginDTO } from '../interface/LoginDTO'
import jwtDecode from 'jwt-decode'
import { ToastrService } from 'ngx-toastr'
import { RegisterDTO } from '../interface/RegisterDTO'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpirationTimer: any
  user = new BehaviorSubject<User>(null as any)
  authURL = environment.authURL

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  public register(data: RegisterDTO): Observable<string> {
    return this.http
      .post(`${this.authURL}/register`, data, { responseType: 'text' })
      .pipe(catchError(this.handleError))
  }

  public login(data: LoginDTO): Observable<string> {
    return this.http
      .post(`${this.authURL}/login`, data, { responseType: 'text' })
      .pipe(
        tap((response) => {
          this.handleLogin(response)
        }),
      )
      .pipe(catchError(this.handleError))
  }

  private handleLogin(token: string) {
    var decoded: any = jwtDecode(token)
    var expiresInSec = decoded.expiresIn * 60000
    var expireDate = new Date(new Date().getTime() + expiresInSec)
    var user = new User(decoded.id, decoded.email, decoded.role, token, expireDate)
    this.user.next(user)
    localStorage.setItem('user', JSON.stringify(user))
    this.autoLogout(expiresInSec)
  }

  private handleError(error: HttpErrorResponse) {
    var errorMessage = 'An unknown error occurred.'
    if (!error.error || error.error.type) return throwError(errorMessage)

    return throwError(error.error)
  }

  public autoLogin() {
    const userData: {
      id: string
      email: string
      role: string
      _token: string
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('user') || 'null')

    if (!userData) {
      return
    }

    const loadedUser = new User(
      userData.id,
      userData.email,
      userData.role,
      userData._token,
      new Date(userData._tokenExpirationDate),
    )

    if (loadedUser.token) {
      this.user.next(loadedUser)
      this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())
    }
  }

  public logout() {
    this.user.next(null as any)
    this.router.navigate([''])
    this.toastr.success('You have been successfully logged out.', 'Goodbye!')
    localStorage.removeItem('user')
    if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer)

    this.tokenExpirationTimer = null
  }

  public autoLogout(expireIn: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout()
    }, expireIn)
  }

  public isLogged() {
    return !!this.user.value
  }
}
