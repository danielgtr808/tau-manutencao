import { Component, } from '@angular/core';
import { DepartmentService } from 'src/app/backend/departments/department.service';
import Sector from 'src/app/backend/sectors/sector.model';
import { SectorService } from 'src/app/backend/sectors/sector.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import CrudTableConfiguration from 'src/app/shared/crud-table/crud-table-configuration.model';
import { subPageLinks } from '../manpower.module';
import SectorPage from './sector-page.model';

@Component({
    selector: 'app-sector-page',
    templateUrl: './sector-page.component.html',
    styleUrls: ['./sector-page.component.css']
})
export class SectorPageComponent {

    public crudTableConfiguration: CrudTableConfiguration<SectorPage>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private departmentService: DepartmentService, private sectorService: SectorService) {
        this.crudTableConfiguration = {
            columnOrder: [
                { baseProperty: "sectorName", displayName: "Nome", size: '1fr' },
                { baseProperty: "departmentName", displayName: "Departamento", size: 'auto' }
            ],
            fetchData: () => {
                const departments = departmentService.readAll();
                const sectors: SectorPage[] = [];
                this.sectorService.readAllActive().forEach(x => {
                    sectors.push(new SectorPage(x, departments));
                })

                return sectors;
            },
            newRegisterLink: '/manpower/sectors/new',
            registersPerPage: 10,
            redirectLinkFn: (model: SectorPage) => {
                return `/manpower/sectors/${model.sector.id}`;
            }
        }
    }

}
