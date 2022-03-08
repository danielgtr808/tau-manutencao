import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SsOsIndicatorComponent } from './ss-os-indicator/ss-os-indicator.component';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardPageComponent
    }
]

@NgModule({
    declarations: [
        DashboardPageComponent,
        SsOsIndicatorComponent
    ],
    exports: [
        DashboardPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        SharedModule
    ]
})
export class DashboardModule { }
