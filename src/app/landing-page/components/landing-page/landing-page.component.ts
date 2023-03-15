import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  private userSub: Subscription | undefined
  isLogged: boolean = false

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isLogged = !!user
    })
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

  onLogout() {
    this.authService.logout()
  }

  onRegister() {
    this.router.navigate(['/register'])
  }
}
