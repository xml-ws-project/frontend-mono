import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { exhaustMap, finalize, Observable, take } from 'rxjs'
import { AuthService } from '../auth/services/auth.service'
import { LoaderService } from '../shared/loader/services/loader.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show()
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
        return next.handle(modifiedRequest).pipe(
          finalize(() => {
            this.loaderService.hide()
          }),
        )
      }),
    )
  }
}
