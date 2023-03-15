import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { exhaustMap, Observable, take } from 'rxjs'
import { AuthService } from '../auth/services/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(request)
        }
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        return next.handle(modifiedRequest)
      }),
    )
  }
}
