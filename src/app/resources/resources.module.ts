import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsFormComponent } from './equipments-form/equipments-form.component';
import { EquipmentsDataComponent } from './equipments-data/equipments-data.component';
import { TagsDataComponent } from './tags-data/tags-data.component';
import { TagsFormComponent } from './tags-form/tags-form.component';
import { MachinesFormComponent } from './machines-form/machines-form.component';
import { MachinesDataComponent } from './machines-data/machines-data.component';
import { MachineFamiliesDataComponent } from './machine-families-data/machine-families-data.component';
import { MachineFamiliesFormComponent } from './machine-families-form/machine-families-form.component';
import { RouterModule, Routes } from '@angular/router';
import SubPageLink from '../shared/content-top-menu/sub-page-link.model';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const resourcesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'machine-families'
    },
    {
        component: MachineFamiliesDataComponent,
        path: 'machine-families'
    },
    {
        component: MachineFamiliesFormComponent,
        path: 'machine-families/:id'
    },
    {
        component: MachinesDataComponent,
        path: 'machines'
    },
    {
        component: MachinesFormComponent,
        path: 'machines/:id'
    },
    {
        component: EquipmentsDataComponent,
        path: 'equipments'
    },
    {
        component: EquipmentsFormComponent,
        path: 'equipments/:id'
    },
    {
        component: TagsDataComponent,
        path: 'tags'
    },
    {
        component: TagsFormComponent,
        path: 'tags/:id'
    }
];

export const subPageLinks: SubPageLink[] = [
    {
        label: 'Famílias de máquinas',
        routerLink: '/resources/machine-families'
    },
    {
        label: 'Máquinas',
        routerLink: '/resources/machines'
    },
    {
        label: 'Equipamentos',
        routerLink: '/resources/equipments'
    },
    {
        label: 'Tags',
        routerLink: '/resources/tags'
    }
]

@NgModule({
    declarations: [
        EquipmentsDataComponent,
        EquipmentsFormComponent,
        MachineFamiliesDataComponent,
        MachineFamiliesFormComponent,
        MachinesDataComponent,
        MachinesFormComponent,
        TagsDataComponent,
        TagsFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(resourcesRoutes),
        SharedModule
    ]
})
export class ResourcesModule { }
