import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

/**
 * Attribute directive which allows to resize site logo
 * due to addition/removal class
 * dependence on current scroll position
 *
 * Example of using
 *
 * <h1 resizeOnScroll> Dfusion shop </h1>
 *
 */
@Directive({
    selector: '[resizeOnScroll]'
})
export class ResizeOnScrollDirective {

    constructor( private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('window:scroll') onScroll() {
        if ( window.pageYOffset > 30 ) {
            this.renderer.addClass( this.el.nativeElement, 'h2' );
        } else {
            this.renderer.removeClass( this.el.nativeElement, 'h2' );
        }
    }
}
