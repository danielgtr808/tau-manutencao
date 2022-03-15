import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import SubPageLink from '../shared/content-top-menu/sub-page-link.model';
import { SharedModule } from '../shared/shared.module';
import { ServiceSolicitationDataComponent } from './service-solicitation-data/service-solicitation-data.component';
import { ServiceSolicitationFormComponent } from './service-solicitation-form/service-solicitation-form.component';
import { ServiceOrderDataComponent } from './service-order-data/service-order-data.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';

const servicesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'service-solicitations'
    },
    {
        component: ServiceSolicitationDataComponent,
        path: 'service-solicitations'
    },
    {
        component: ServiceSolicitationFormComponent,
        path: 'service-solicitations/:id'
    },
    {
        component: ServiceOrderDataComponent,
        path: 'service-orders'
    },
    {
        component: ServiceOrderFormComponent,
        path: 'service-orders/:id'
    }
];

export const subPageLinks: SubPageLink[] = [
    {
        label: 'Solicitações de serviço',
        routerLink: '/services/service-solicitations'
    },
    {
        label: 'Ordem de serviço',
        routerLink: '/services/service-orders'
    }
]

@NgModule({
    declarations: [
        ServiceSolicitationDataComponent,
        ServiceSolicitationFormComponent,
        ServiceOrderDataComponent,
        ServiceOrderFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(servicesRoutes),
        SharedModule
    ]
})
export class ServicesModule { }
