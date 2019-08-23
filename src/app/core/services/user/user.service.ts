import { Injectable } from '@angular/core';
// import { IUser } from '../../../models/user';
import { Api } from '../../../core/providers/api';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { BaseUrlProvider } from '../../providers/base.url.provider';
// import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: Api) { //, public http: HttpClient, private _baseAppUrl: BaseUrlProvider
  }

  getUsers = () => {
    return this.api.get('user');
    // let token = JSON.parse(localStorage.getItem('currentUser'));
    // return this.http.get(`${this._baseAppUrl.apiBaseUrl}user`, {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + token.data,
    //     "Content-Type": "application/json"
    //   })
    // })
  }

}
