import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/backend/models/departments/department.service';
import Sector from 'src/app/backend/models/sectors/sector.model';
import { SectorService } from 'src/app/backend/models/sectors/sector.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../manpower.module';

@Component({
    selector: 'app-sector-data',
    templateUrl: './sector-data.component.html',
    styleUrls: ['./sector-data.component.css']
})
export class SectorDataComponent {
    
    public dataTableConfiguration: DataTableConfiguration<Sector>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private sectorService: SectorService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' },
                { baseProperty: "departmentName", displayName: "Departamento", size: 'auto' }
            ],
            deleteDataFn: (model: Sector) => {
                this.sectorService.delete(model);
            },
            fetchData: () => {
                return this.sectorService.readAllActive();
            },
            redirectLinkFn: (model: Sector) => {
                return `/manpower/sectors/${model.id}`;
            },
            registersPerPage: 10
        }
    }

}
