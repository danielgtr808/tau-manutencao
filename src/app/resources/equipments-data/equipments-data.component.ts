import { Component } from '@angular/core';
import Equipment from 'src/app/backend/models/equipments/equipment.model';
import { EquipmentService } from 'src/app/backend/models/equipments/equipment.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../resources.module';

@Component({
    selector: 'app-equipments-data',
    templateUrl: './equipments-data.component.html',
    styleUrls: ['./equipments-data.component.css']
})
export class EquipmentsDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Equipment>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(
        private equipmentService: EquipmentService
    ) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "name", displayName: "Nome", size: '1fr' },
                { baseProperty: "machineName", displayName: "Máquina", size: 'auto' }
            ],
            deleteDataFn: (model: Equipment) => {
                this.equipmentService.delete(model);
            },
            fetchData: () => {
                return this.equipmentService.readAllActive();
            },
            redirectLinkFn: (model: Equipment) => {
                return `/resources/equipments/${model.id}`;
            },
            registersPerPage: 10
        }
    }

}
