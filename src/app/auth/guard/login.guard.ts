import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { map, Observable, take } from 'rxjs'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private custom: CustomToastrService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user
        if (isAuth) {
          return true
        }
        this.custom.info(
          'Unauthorized.',
          'You must be logged in to access this path.',
          ToasterPosition.topRight,
        )
        return this.router.createUrlTree(['/login'])
      }),
    )
  }
}
