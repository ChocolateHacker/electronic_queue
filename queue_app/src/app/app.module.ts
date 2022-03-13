import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueWallPageComponent } from './components/queue-wall-page/queue-wall-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {CommonModule} from "@angular/common";
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: QueueWallPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    QueueWallPageComponent,
    LoginPageComponent,
    RegistrationPageComponent
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
  entryComponents:[QueueWallPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
