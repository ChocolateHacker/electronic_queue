import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page.component';


const routes: Routes = [
    {
        path: '',
        component: RegistrationPageComponent
    }
];

@NgModule({
    declarations: [
        RegistrationPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})

export class RegistrationModule{ }