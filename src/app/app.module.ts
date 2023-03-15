import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainAppModule } from './main-app/main-app.module'
import { NavbarComponent } from './navbar/navbar.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { AuthModule } from './auth/auth.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { JwtInterceptor } from './interceptor/jwt.interceptor'
import { LoaderModule } from './shared/loader/loader.module'

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainAppModule,
    NoopAnimationsModule,
    FormsModule,
    AuthModule,
    LoaderModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
