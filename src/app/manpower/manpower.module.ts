import { CommonModule } from '@angular/common';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import SubPageLink from '../shared/content-top-menu/sub-page-link.model';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { DepartmentDataComponent } from './department-data/department-data.component';
import { SectorPageComponent } from './sector-page/sector-page.component';
import { SectorDataComponent } from './sector-data/sector-data.component';

const manpowerRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employees'        
    },
    {
        component: EmployeesPageComponent,
        path: 'employees'
    },
    {
        component: EmployeeDataComponent,
        path: 'employees/:id'
    },
    {
        component: DepartmentPageComponent,
        path: 'departments'
    },
    {
        component: DepartmentDataComponent,
        path: 'departments/:id'
    },
    {
        component: SectorPageComponent,
        path: 'sectors'
    },
    {
        component: SectorDataComponent,
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
        EmployeeDataComponent,
        EmployeesPageComponent,
        DepartmentPageComponent,
        DepartmentDataComponent,
        SectorPageComponent,
        SectorDataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(manpowerRoutes),
        SharedModule
    ]
})
export class ManpowerModule { }
