import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QueueWallPageComponent } from './queue-wall-page.component';


const routes: Routes = [
    {
        path: '',
        component: QueueWallPageComponent
    }
];

@NgModule({
    declarations: [
        QueueWallPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})

export class QueueModule{ }