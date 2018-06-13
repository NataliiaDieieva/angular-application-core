import {Component, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'auth-modal',
    templateUrl: './auth-modal.html',
})
export class AuthModal {
    /**
     * using vm to define public data of the page
     * and delegate prepared properties
     *
     */
    public vm = {
        auth: {
            email: '',
            password: ''
        }
    };

    constructor(public activeModal: NgbActiveModal) {

    }

    signIn( credentials ) {
        console.log(credentials);
    }

}
