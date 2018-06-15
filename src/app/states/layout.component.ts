// outsource
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
/**
 * layout component
 *
 *
 */
@Component({
    selector: '[id="layout"]',
    templateUrl: './layout.html',
})
export class LayoutComponent implements OnInit {
    public user: User;

    constructor ( private authService: AuthService, private toastr: ToastrService ) {}

    ngOnInit() {
        // informed user if session was expired
        if ( this.authService.restoreSession() === false ) {
            setTimeout(() => {
                this.toastr.info('Log in to have more capabilities', 'Hello. User!');
            });
        }
        // record user if user was authorized
        if (this.authService.isAuthorized()) {
            this.authService.getUser().subscribe(
                response =>  this.user = response,
                error => console.log(error)
            );
        }
        // listen to loginEvent
        this.authService.loginEvent.subscribe(() => {
            this.authService.getUser().subscribe(
                response => this.user = response,
                error => console.log(error)
            );
        });
        // listen to logoutEvent
        this.authService.logoutEvent.subscribe(() => this.user = null);
    }
};
