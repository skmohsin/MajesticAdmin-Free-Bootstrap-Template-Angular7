import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({ providedIn: 'root'})
export class ToastrUtil {

    constructor(private toastr: ToastrService) { }

    success(title: string, message: string) {
        return this.toastr.success(message, title);
    }

    warning(title: string, message: string) {
        return this.toastr.warning(message, title);
    }

    error(title: string, message: string) {
        return this.toastr.error(message, title);
    }

    info(title: string, message: string) {
        return this.toastr.info(message, title);
    }
}
