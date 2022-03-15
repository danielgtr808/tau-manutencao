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
        canActivate: [LoginGuard],
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
        path: 'resources'
    },
    {
        canActivate: [LoginGuard],
        loadChildren: () => import('./interventions/interventions.module').then(m => m.InterventionsModule),
        path: 'interventions'
    },
    {
        canActivate: [LoginGuard],
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
        path: 'services'
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
