// outsource
import { Component } from '@angular/core';

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
    }

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor (  ) {

    }

};
