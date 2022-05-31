import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueModule } from './components/queue-wall-page/queue-wall-page.module';
import { AccountModule } from './modules/auth/account.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'user', loadChildren: ():Promise<QueueModule> => import('./components/queue-wall-page/queue-wall-page.module').then((x: any) => x.QueueModule) },
    { path: 'account', loadChildren: ():Promise<AccountModule> => import('./modules/auth/account.module').then((x: any) => x.AccountModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
