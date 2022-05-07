import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/modules/auth/components/login-page/login-page.component';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { RegistrationPageComponent } from './components/modules/auth/components/registration-page/registration-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableComponent } from './components/modules/board/components/table/table.component';
import { TableInfoComponent } from './components/modules/board/components/table-info/table-info.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { TableDetailComponent } from './components/modules/board/components/table-detail/table-detail.component';
import { SkeletonLoaderModule } from './components/skeleton-loader/skeleton-loader.module';
import { RenameProfileComponent } from './components/rename-profile/rename-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'queue', pathMatch: 'full' },
    { path: 'queue', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'us-profile/:id', component: UserProfileComponent },
    { path: 'ad-profile/:id', component: AdminProfileComponent },
    { path: 'table', component: TableComponent },
    { path: 'table/:id', component: TableDetailComponent },
    { path: 'rename/:id', component: RenameProfileComponent },
    { path: '**', redirectTo: 'queue' },
];
// component: LoginPageComponent

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegistrationPageComponent,
        UserProfileComponent,
        TableComponent,
        TableInfoComponent,
        AdminProfileComponent,
        RenameProfileComponent,
        TableDetailComponent,
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
        SkeletonLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
