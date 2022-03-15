import { Component, OnInit } from '@angular/core';
import Machine from 'src/app/backend/models/machines/machine.model';
import { MachineService } from 'src/app/backend/models/machines/machine.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../resources.module';

@Component({
    selector: 'app-machines-data',
    templateUrl: './machines-data.component.html',
    styleUrls: ['./machines-data.component.css']
})
export class MachinesDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Machine>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private machineService: MachineService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "id", displayName: "ID", size: 'auto' },
                { baseProperty: "name", displayName: "Nome", size: '1fr' },
                { baseProperty: "familyName", displayName: "Família da máquina", size: 'auto' },
                { baseProperty: "departmentName", displayName: "Departamento", size: 'auto' }
            ],
            fetchData: () => {
                return this.machineService.readAllActive();
            },
            deleteDataFn: (model: Machine) => {
                this.machineService.delete(model);
            },
            redirectLinkFn: (model: Machine) => {
                return `/resources/machines/${model.id}`;
            },
            registersPerPage: 10
        }
    }

}
