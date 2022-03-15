import { Component } from '@angular/core';
import MachineFamily from 'src/app/backend/models/machine-families/machine-family.model';
import { MachineFamilyService } from 'src/app/backend/models/machine-families/machine-family.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../resources.module';

@Component({
    selector: 'app-machine-families-data',
    templateUrl: './machine-families-data.component.html',
    styleUrls: ['./machine-families-data.component.css']
})
export class MachineFamiliesDataComponent {

    public dataTableConfiguration: DataTableConfiguration<MachineFamily>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private equipmentService: MachineFamilyService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' },
                { baseProperty: "prefix", displayName: "Prefixo", size: 'auto' }
            ],
            fetchData: () => {
                return this.equipmentService.readAllActive();
            },
            registersPerPage: 10
        }
    }

}
