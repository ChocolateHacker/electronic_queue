import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableComponent } from './components/table/table.component';
import { TableInfoComponent } from './components/table-info/table-info.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'queue', pathMatch: 'full' },
    { path: 'queue', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'table', component: TableComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegistrationPageComponent,
        UserProfileComponent,
        TableComponent,
        TableInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
