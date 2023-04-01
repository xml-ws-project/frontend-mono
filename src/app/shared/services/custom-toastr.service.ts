import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ToasterPosition } from '../enums/ToasterPosition'

@Injectable()
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}

  public success(title: string | undefined, message: string, positionClass: ToasterPosition) {
    this.toastr.success(message, title, { positionClass })
  }

  public error(title: string | undefined, message: string, positionClass: ToasterPosition) {
    this.toastr.error(message, title, { positionClass })
  }

  public warning(title: string | undefined, message: string, positionClass: ToasterPosition) {
    this.toastr.warning(message, title, { positionClass })
  }

  public info(title: string | undefined, message: string, positionClass: ToasterPosition) {
    this.toastr.info(message, title, { positionClass })
  }
}
