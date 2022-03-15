import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import SubPageLink from '../shared/content-top-menu/sub-page-link.model';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentDataComponent } from './department-data/department-data.component';
import { SectorDataComponent } from './sector-data/sector-data.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { SectorFormComponent } from './sector-form/sector-form.component';

const manpowerRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employees'        
    },
    {
        component: EmployeesDataComponent,
        path: 'employees'
    },
    {
        component: EmployeesFormComponent,
        path: 'employees/:id'
    },
    {
        component: DepartmentDataComponent,
        path: 'departments'
    },
    {
        component: DepartmentFormComponent,
        path: 'departments/:id'
    },
    {
        component: SectorDataComponent,
        path: 'sectors'
    },
    {
        component: SectorFormComponent,
        path: 'sectors/:id'
    }
];

export const subPageLinks: SubPageLink[] = [
    {
        label: 'Funcionários',
        routerLink: '/manpower/employees'
    },
    {
        label: 'Departamentos',
        routerLink: '/manpower/departments'
    },
    {
        label: 'Setores',
        routerLink: '/manpower/sectors'
    }
]

@NgModule({
    declarations: [
        EmployeesDataComponent,
        EmployeesFormComponent,
        DepartmentDataComponent,
        DepartmentFormComponent,
        SectorDataComponent,
        SectorFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(manpowerRoutes),
        SharedModule
    ]
})
export class ManpowerModule { }
