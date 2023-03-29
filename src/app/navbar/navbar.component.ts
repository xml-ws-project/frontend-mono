import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from '../auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private userSub: Subscription | undefined
  public isLogged: boolean = false
  public email: string = ''
  public burger: boolean = true

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.email = user == null ? 'NO-EMAIL' : user.email
    })
    this.isLogged = this.authService.isLogged()
  }

  onHome() {
    this.router.navigate([''])
    this.onBurgerToggle()
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

  onLogout() {
    this.authService.logout()
    this.isLogged = !this.isLogged
  }

  onRegister() {
    this.router.navigate(['/register'])
  }

  onBurgerToggle() {
    this.burger = !this.burger
  }
}
