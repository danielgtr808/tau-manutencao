import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/backend/models/employees/employee.model';
import { EmployeeService } from 'src/app/backend/models/employees/employee.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../manpower.module';

@Component({
    selector: 'app-employees-data',
    templateUrl: './employees-data.component.html',
    styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Employee>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private employeeService: EmployeeService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' }
            ],
            deleteDataFn: (model: Employee) => {
                this.employeeService.delete(model);
            },
            fetchData: () => {
                return this.employeeService.readAllActive();
            },
            registersPerPage: 10
        }
    }
}