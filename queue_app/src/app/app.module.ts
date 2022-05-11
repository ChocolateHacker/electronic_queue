import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { RegistrationPageComponent } from './modules/auth/components/registration-page/registration-page.component';
import { SkeletonLoaderModule } from './modules/board/components/skeleton-loader/skeleton-loader.module';
import { TableInfoComponent } from './modules/board/components/table-info/table-info.component';
import { TableComponent } from './modules/board/components/table/table.component';
import { UserProfileComponent } from './modules/other/components/user-profile/user-profile.component';
import { AdminProfileComponent } from './modules/other/components/admin-profile/admin-profile.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'queue', pathMatch: 'full' },
    { path: 'queue', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'us-profile/:id', component: UserProfileComponent },
    { path: 'ad-profile/:id', component: AdminProfileComponent },
    { path: 'table', component: TableComponent },
    { path: 'rename/:id', component: UserProfileComponent },
    { path: '**', redirectTo: 'queue' },
];

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegistrationPageComponent,
        UserProfileComponent,
        TableComponent,
        TableInfoComponent,
        AdminProfileComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SkeletonLoaderModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
