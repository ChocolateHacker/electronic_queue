import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./styles/navbar.component.scss']
})
export class NavbarComponent implements OnChanges {
    public auth!: boolean;

    constructor(
        private _auhtorizated: AuthorizedService,
        private _router: Router
    ){
    }

    public ngOnChanges(): void {
        this.auth = this._auhtorizated.authComplete;
    }

    public exit(): void {
        alert('Вы вышли из системы');
        this._auhtorizated.authComplete = false;
        this._router.navigate(['/queue']);
    }
}
