import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('AAAA')
    this.router.navigate(["/login"])
  }

  onRegister(){
    this.router.navigate(["/register"])
  }

}
