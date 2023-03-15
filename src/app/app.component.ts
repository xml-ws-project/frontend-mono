import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VIMA Airlines';
  isLogged = false;
  private userSub: Subscription | undefined;
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user =>{
      this.isLogged = !!user;
    })
  }
}
