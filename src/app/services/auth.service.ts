import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    // EVENTS
    public loginEvent = new Subject();
    public logoutEvent = new Subject();

    constructor( private http: HttpClient ) {}
    /**
     * to record session parameters to keep logged in user
     * @private
     */
    private recordSession( session ) {
        localStorage.setItem('auth', JSON.stringify( session ));
    }

    /**
     * to check whether the user is authorized
     * @returns { Boolean }
     * @public
     */
    isAuthorized() {
        return !!localStorage.getItem('auth');
    }

    /**
     * Log in
     *
     * @param { Object } credentials
     * @public
     */
    logIn( credentials ) {
        this.http
           .post(
               'http://192.168.0.19:5604/auth/authorize',
               credentials
           )
           .subscribe(
               data => {
                   this.recordSession( data );
                   // emit login event
                   this.loginEvent.next();
               },
               error =>
                   console.log(error)
           );
    }

    /**
     * Log out
     *
     * @public
     */
    logOut() {
        this.http
            .post(
                'http://192.168.0.19:5604/auth/logout',
                null
            )
            .subscribe(
                response => {
                        if ( response['message'] === 'OK' ) {
                            localStorage.removeItem('auth');
                            // emit logout event
                            this.logoutEvent.next();
                        }
                    },
                error => console.log( error )
            );
    }

    /**
     * Sign up
     *
     * will be implement in future
     */
    signUp( credentials ) {}

    /**
     * to get actual user data from server side
     *
     * @return { User }
     * @public
     */
    getUser() {
        return this.http
            .get('http://192.168.0.19:5604/flask/users/self')
            .map( data => {
                return new User( data );
            });
    }

    /**
     * to restore session on the next user visit
     *
     * @returns { Boolean }
     * @public
     */
    restoreSession () {
        const session = JSON.parse(localStorage.getItem('auth'));
        if ( session !== null ) {
            const expired = new Date( session['expired']);
            if ( expired > new Date() ) {
                return true;
            } else {
                localStorage.removeItem('auth');
                return false;
            }
        }
    }
}
