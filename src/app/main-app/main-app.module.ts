import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from './main-app.component';



@NgModule({
  declarations: [MainAppComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainAppRoutingModule
  ]
})
export class MainAppModule { }
