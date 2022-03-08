import { Component } from '@angular/core';
import Department from 'src/app/backend/departments/department.model';
import { DepartmentService } from 'src/app/backend/departments/department.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import CrudTableConfiguration from 'src/app/shared/crud-table/crud-table-configuration.model';
import { subPageLinks } from '../manpower.module';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent {

    public crudTableConfiguration: CrudTableConfiguration<Department>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private departmentService: DepartmentService) {
        this.crudTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' }
            ],
            fetchData: () => {
                return this.departmentService.readAllActive();
            },
            newRegisterLink: '/manpower/departments/new',
            registersPerPage: 10,
            redirectLinkFn: (model: Department) => {
                return `/manpower/departments/${model.id}`;
            }
        }
    }

}
