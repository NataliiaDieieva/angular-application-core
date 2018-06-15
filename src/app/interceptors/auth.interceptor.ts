import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
/**
 * Request interceptor
 * which adds special header with user's token
 * for all requests if user was log in
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if ( localStorage.getItem('auth') !== null ) {
            // JSON.parse error handling
            let auth;
            try {
                auth = JSON.parse(localStorage.getItem('auth'));
            } catch (e) {
                auth = null;
                return next.handle(request);
            }
            request = request.clone({
                setHeaders: {
                    Authorization: auth['token']
                }
            });
        }
        return next.handle(request);
    }
}
