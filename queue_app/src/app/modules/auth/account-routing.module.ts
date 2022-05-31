import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueWallPageComponent } from 'src/app/components/queue-wall-page/queue-wall-page.component';
import { LoginModule } from './components/login-page/login-page.module';
import { RegistrationModule } from './components/registration-page/registration-page.module';

const appRoutes: Routes = [
    { path: '', component: QueueWallPageComponent },
    { path: 'login', loadChildren: ():Promise<LoginModule> => import('./components/login-page/login-page.module').then((x: any) => x.LoginModule) },
    { path: 'registration', loadChildren: ():Promise<RegistrationModule> => import('./components/registration-page/registration-page.module').then((x: any) => x.RegistrationModule) },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
