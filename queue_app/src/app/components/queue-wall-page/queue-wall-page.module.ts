import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../../components/queue-wall-page/components/user-profile/user-profile.component';
import { AuthGuard } from '../../modules/other/guard/auth.guard';
import { AuthTableComponent } from './components/auth-table/auth-table.component';
import { RenameProfileComponent } from './components/rename-profile/rename-profile.component';
import { QueueWallPageComponent } from './queue-wall-page.component';


const routes: Routes = [
    //{
    //    path: '',
    //    component: QueueWallPageComponent
    //},
    {
        path: 'profile/:id',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile/rename/:id',
        component: RenameProfileComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'authTable', 
        component: AuthTableComponent,
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