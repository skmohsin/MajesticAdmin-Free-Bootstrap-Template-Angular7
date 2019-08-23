import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
declare var $: any;
var body = $('body');

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    public profilePicture: string = '';
    public fullName: string;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    toggleSideNav() {
        body.toggleClass('sidebar-icon-only');
    }

    mobileToggleMenu() {
        $('[data-toggle="offcanvas"]').on("click", function () {
            $('.sidebar-offcanvas').toggleClass('active')
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }
}