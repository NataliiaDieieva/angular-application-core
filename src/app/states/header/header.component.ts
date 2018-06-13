// outsource
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthModal } from '../auth-modal/auth-modal';


@Component({
    selector: '[id="header"]',
    templateUrl: './header.html',
})
export class HeaderComponent {
    /**
     * using vm to define public data of the page
     * and delegate prepared properties
     *
     */
    public vm = {
        isCollapsed: true,
        // use arrow function to call this.openAuthModal with this = HeaderComponent
        openAuthModal: () => this.openAuthModal()
    };

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private modalService: NgbModal ) {}

    /**
     * Opens authentication modal window
     * which represented by AuthModal component
     * and created backdrop element which doesn't close the modal on click
     */
   openAuthModal () {
       this.modalService.open( AuthModal, {backdrop: 'static'});
    }

};
