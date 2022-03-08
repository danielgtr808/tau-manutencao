import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/backend/employees/employee.model';
import { EmployeeService } from 'src/app/backend/employees/employee.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import CrudTableConfiguration from 'src/app/shared/crud-table/crud-table-configuration.model';
import { subPageLinks } from '../manpower.module';

@Component({
    selector: 'app-employees-page',
    templateUrl: './employees-page.component.html',
    styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

    public crudTableConfiguration: CrudTableConfiguration<Employee>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private employeeService: EmployeeService) {
        this.crudTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' }
            ],
            fetchData: () => {
                return this.employeeService.readAllActive();
            },
            newRegisterLink: '/manpower/employees/new',
            registersPerPage: 10,
            redirectLinkFn: (model: Employee) => {
                return `/manpower/employees/${model.id}`;
            }
        }
    }

}
