import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authReq: HttpRequest<any> = req.clone({
            headers: req.headers.set('Session', '123456789'),
        });

        return next.handle(authReq).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse){
                        console.log('Server response');
                    };
                },
                (err: HttpErrorResponse) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 0){
                            console.log('Base not connected');
                        }
                    }
                }
            )
        );
    }
}