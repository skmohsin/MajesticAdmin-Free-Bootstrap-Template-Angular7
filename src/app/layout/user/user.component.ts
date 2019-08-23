import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service'
import { IUser } from 'src/app/models/user';
import { ResponseWrapper } from 'src/app/core/providers/ResponseWrapper';
import { BaseUrlProvider } from 'src/app/core/providers/base.url.provider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[];
  userImageUrl: string;
  isAuthorized: boolean = true;

  constructor(private userService: UserService, private userImage: BaseUrlProvider,
    private toastrUtil: ToastrService) {
    this.userImageUrl = this.userImage.profilePictureBaseUrl;
  }

  ngOnInit() {
    return this.userService.getUsers().subscribe((response: ResponseWrapper) => {
      this.users = response.data as IUser[];
    }, error => {
      this.isAuthorized = false;
      this.toastrUtil.error(null, error.error.title);
    });
  }

}
