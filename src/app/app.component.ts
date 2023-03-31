import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VIMA Airlines';
  isLogged = false;
  private userSub: Subscription | undefined;
  private refreshSub: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isLogged = !!user;
    })
    this.refreshSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !this.router.navigated;
      }
    });
  }
}
