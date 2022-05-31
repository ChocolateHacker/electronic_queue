import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountRoutingModule } from './account-routing.module';
import { EnterLogicService } from './services/enter-logic.service';




@NgModule({
    declarations: [
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    providers: [
        //EnterLogicService
    ],
    bootstrap: []
})
export class AccountModule { }
