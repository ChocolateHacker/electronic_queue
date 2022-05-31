import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { LoginModule } from './modules/auth/components/login-page/login-page.module';
import { RegistrationModule } from './modules/auth/components/registration-page/registration-page.module';
import { AuthGuard } from './modules/other/guard/auth.guard';
import { RenameProfileComponent } from './components/queue-wall-page/components/rename-profile/rename-profile.component';
import { TableComponent } from './modules/board/components/table/table.component';
import { AuthTableComponent } from './components/queue-wall-page/components/auth-table/auth-table.component';
import { AccountModule } from './modules/auth/account.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'user', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    //{ path: 'login', loadChildren: ():Promise<LoginModule> => import('./modules/auth/components/login-page/login-page.module').then((x: any) => x.LoginModule) },
    //{ path: 'registration', loadChildren: ():Promise<RegistrationModule> => import('./modules/auth/components/registration-page/registration-page.module').then((x: any) => x.RegistrationModule) },
    { path: 'account', loadChildren: ():Promise<AccountModule> => import('./modules/auth/account.module').then((x: any) => x.AccountModule) },
    //{ path: 'table', component: TableComponent },
    // { path: 'rename/:id', canActivate: [AuthGuard], component: RenameProfileComponent },
    //{ path: 'authTable', canActivate: [AuthGuard], component: AuthTableComponent }
    // { path: '**', redirectTo: 'queue' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
