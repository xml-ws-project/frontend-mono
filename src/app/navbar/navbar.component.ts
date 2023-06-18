import { Component, OnInit, ViewChild } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'
import { Router } from '@angular/router'
import { map, share, Subscription, timer } from 'rxjs'
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
  public role: string = ''
  public burger: boolean = true
  public currentDate: Date = new Date()
  public subscription: Subscription
  public intervalId: any

  constructor(private router: Router, private authService: AuthService) {}

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger

  someMethod() {
    this.trigger.openMenu()
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      if (user == null) return
      this.email = user.email
      this.role = user.role
    })
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share(),
      )
      .subscribe((time) => {
        let hour = this.currentDate.getHours()
        let minuts = this.currentDate.getMinutes()
        let seconds = this.currentDate.getSeconds()
        let NewTime = hour + ':' + minuts + ':' + seconds
        this.currentDate = time
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
    window.location.reload()
  }

  onRegister() {
    this.router.navigate(['/register'])
  }

  onBurgerToggle() {
    this.burger = !this.burger
  }

  onNewFlight() {
    this.router.navigate(['/create-flight'])
  }

  onTickets() {
    this.router.navigate(['/user/tickets'])
  }

  onApiKey() {
    this.router.navigate(['/api-key'])
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
