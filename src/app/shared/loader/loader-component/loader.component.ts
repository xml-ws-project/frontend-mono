import { Component } from '@angular/core'
import { LoaderService } from '../services/loader.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  constructor(private service: LoaderService) {}
  public isLoading: Observable<boolean> = this.service.isLoading$
}
