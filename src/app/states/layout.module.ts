// outsource
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModal } from './auth-modal/auth-modal';
// app states
import { homeState } from './home/home.state';
import { loginState } from './login/login.state';
// app directives
import { ResizeOnScrollDirective } from '../directives/resizeOnScroll.directive';

/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    // useHash: false, // html5mode - without #
    useHash: true, // with #
    otherwise: homeState.url,
    states: [
        homeState,
        loginState,
    ],
};

/**
 * Layout application module
 *
 *
 */
@NgModule({
    // define list of all page components
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        homeState.component,
        loginState.component,
        ResizeOnScrollDirective,
        AuthModal
    ],
    // define dependencies for all page components
    imports: [
        CommonModule,
        FormsModule,
        UIRouterModule.forRoot(routing),
        NgbModule.forRoot()
    ],
    // define outgoing modules
    exports: [
        UIRouterModule
    ],
    entryComponents: [AuthModal],
})
export class LayoutModule { }
