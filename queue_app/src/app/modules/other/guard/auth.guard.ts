import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthorizedService } from '../../auth/services/authorized.servise';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        @Inject(AuthorizedService)
        private _auth: AuthorizedService,
        private _router: Router
    ) {}

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this._auth.authComplete){
            return of(true);
        } else {
            alert('Пожалуйста авторизируйтесь');
            this._router.navigate(['/account/login']);

            return of(false);
        };
    }
}
