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
import { RenameProfileComponent } from './modules/other/components/rename-profile/rename-profile.component';
import { AuthTableComponent } from './modules/other/components/auth-table/auth-table.component';
import { AuthGuard } from './modules/auth/guard/auth.guard';



@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegistrationPageComponent,
        UserProfileComponent,
        TableComponent,
        TableInfoComponent,
        NavbarComponent,
        RenameProfileComponent,
        AuthTableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
