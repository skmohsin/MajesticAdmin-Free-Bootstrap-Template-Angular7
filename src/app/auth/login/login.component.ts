import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ResponseWrapper } from 'src/app/core/providers/ResponseWrapper';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { ToastrUtil } from '../../utils/toastr.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = { email: null, password: null };

  constructor(private router: Router, private authService: AuthenticationService,
    private toastrUtil: ToastrUtil) { }

  ngOnInit() { }

  authenticate(user: any) {
    return this.authService.authenticate(user).subscribe((response: ResponseWrapper) => {

      if (response && response.data) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.toastrUtil.success(null, response.message);
        localStorage.setItem('currentUser', JSON.stringify(response));
      }
      this.router.navigate(['/food-admin']);

    }, error => {
      if (error.status === 401) {
        console.log(error);
        this.toastrUtil.error(null, error.error.title);
      }
    });
  }
}