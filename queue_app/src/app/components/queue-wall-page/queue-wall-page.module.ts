import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecordsLogicService } from 'src/app/modules/board/services/records-logic.service';
import { UserProfileComponent } from '../../components/queue-wall-page/components/user-profile/user-profile.component';
import { AuthGuard } from '../../modules/other/guard/auth.guard';
import { AuthTableComponent } from './components/auth-table/auth-table.component';
import { RenameProfileComponent } from './components/rename-profile/rename-profile.component';
import { QueueWallPageComponent } from './queue-wall-page.component';
import { UserService } from './services/user.service';


const routes: Routes = [
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
    ],
    providers: [
        UserService,
        RecordsLogicService,
        AuthGuard
    ]
})

export class QueueModule{ }