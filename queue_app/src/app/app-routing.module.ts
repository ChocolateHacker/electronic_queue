import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { RegistrationPageComponent } from './modules/auth/components/registration-page/registration-page.component';
import { AuthGuard } from './modules/auth/guard/auth.guard';
import { TableComponent } from './modules/board/components/table/table.component';
import { AuthTableComponent } from './modules/other/components/auth-table/auth-table.component';
import { RenameProfileComponent } from './modules/other/components/rename-profile/rename-profile.component';
import { UserProfileComponent } from './modules/other/components/user-profile/user-profile.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'queue', pathMatch: 'full' },
    { path: 'queue', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'profile/:id', canActivate: [AuthGuard], component: UserProfileComponent },
    { path: 'table', component: TableComponent },
    { path: 'authTable', canActivate: [AuthGuard], component: AuthTableComponent },
    { path: 'rename/:id', canActivate: [AuthGuard], component: RenameProfileComponent },
    { path: '**', redirectTo: 'queue' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
