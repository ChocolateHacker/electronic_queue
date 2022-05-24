import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from 'src/app/components/queue-wall-page/components/user-profile/user-profile.component';
import { AuthGuard } from 'src/app/modules/other/guard/auth.guard';
import { RenameProfileComponent } from './components/rename-profile/rename-profile.component';
import { QueueWallPageComponent } from './queue-wall-page.component';


const routes: Routes = [
    {
        path: '',
        component: QueueWallPageComponent
    },
    {
        path: 'profile/:id',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile/rename/:id',
        component: RenameProfileComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        QueueWallPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})

export class QueueModule{ }