import { Component } from '@angular/core';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import Department from 'src/app/backend/models/departments/department.model';
import { DepartmentService } from 'src/app/backend/models/departments/department.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import { subPageLinks } from '../manpower.module';

@Component({
    selector: 'app-department-data',
    templateUrl: './department-data.component.html',
    styleUrls: ['./department-data.component.css']
})
export class DepartmentDataComponent {
    
    public dataTableConfiguration: DataTableConfiguration<Department>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private departmentService: DepartmentService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' }
            ],
            deleteDataFn: (model: Department) => {
                this.departmentService.delete(model);
            },
            fetchData: () => {
                return this.departmentService.readAllActive();
            },
            registersPerPage: 10,
        }
    }

}
