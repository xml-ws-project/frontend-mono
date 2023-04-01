import { FlightsModule } from './flights/flights.module'
import { LandingPageModule } from './landing-page/landing-page.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { AuthModule } from './auth/auth.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { JwtInterceptor } from './interceptor/jwt.interceptor'
import { LoaderModule } from './shared/loader/loader.module'
import { CommonModule } from '@angular/common'
import { ErrorsModule } from './shared/errors/errors.module'
import { CustomToastrService } from './shared/services/custom-toastr.service'
import { MatMenuModule } from '@angular/material/menu'
import { LoaderService } from './shared/loader/services/loader.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    AuthModule,
    LoaderModule,
    ErrorsModule,
    MatMenuModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CustomToastrService,
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
