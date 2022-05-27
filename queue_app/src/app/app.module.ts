import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SkeletonLoaderModule } from './modules/board/components/skeleton-loader/skeleton-loader.module';
import { TableInfoComponent } from './modules/board/components/table-info/table-info.component';
import { TableComponent } from './modules/board/components/table/table.component';
import { UserProfileComponent } from './components/queue-wall-page/components/user-profile/user-profile.component';
import { RenameProfileComponent } from './components/queue-wall-page/components/rename-profile/rename-profile.component';
import { AuthTableComponent } from './components/queue-wall-page/components/auth-table/auth-table.component';
import { PhonePipe } from './modules/other/pipes/phone.pipe';
import { BtnColorDirective } from './modules/other/directives/color.directive';
import { AuthInterceptor } from './modules/other/interceptor/interceptor';



@NgModule({
    declarations: [
        AppComponent,
        UserProfileComponent,
        NavbarComponent,
        RenameProfileComponent,
        AuthTableComponent,
        PhonePipe,
        TableInfoComponent,
        TableComponent,
        BtnColorDirective
    ],
    imports: [
        BrowserModule,
        SkeletonLoaderModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
