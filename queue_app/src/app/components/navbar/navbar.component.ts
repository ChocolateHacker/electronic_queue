import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./styles/navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private _auhtorizated: AuthorizedService,
        private _router: Router
    ){
    }

    public ngOnInit(): void {
    }

    public exit(): void {
        alert('Вы вышли из системы');
        this._auhtorizated.authComplete = false;
        this._router.navigate(['/queue']);
    }

    public get isAuthorized() : boolean {
        return this._auhtorizated.authComplete;
    }
}
