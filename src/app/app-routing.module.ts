import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
    {
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        path: ''
    },
    {
        canActivate: [LoginGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        path: 'dashboard'
    },
    {
        canActivate: [LoginGuard],
        loadChildren: () => import('./manpower/manpower.module').then(m => m.ManpowerModule),
        path: 'manpower'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
