import { Injectable } from '@angular/core';
import { Api } from '../../../core/providers/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private api: Api) { }

  authenticate(user : any) {
    return this.api.post('user', user);
  }
}
