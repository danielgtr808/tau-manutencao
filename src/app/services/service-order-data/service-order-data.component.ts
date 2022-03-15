import { Component } from '@angular/core';
import { ServiceOrderService } from 'src/app/backend/models/service-order/service-order.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../services.module';
import ServiceOrderViewmodel from './service-order.viewmodel';

@Component({
    selector: 'app-service-order-data',
    templateUrl: './service-order-data.component.html',
    styleUrls: ['./service-order-data.component.css']
})
export class ServiceOrderDataComponent {

    public dataTableConfiguration: DataTableConfiguration<ServiceOrderViewmodel>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(
        private serviceOrderService: ServiceOrderService
    ) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "id", displayName: "N° SO", size: 'auto' },
                { baseProperty: "machineName", displayName: "Máquina", size: '1fr' },
                { baseProperty: "machineTag", displayName: "Tag da máquina", size: 'auto' },
                { baseProperty: "sectorName", displayName: "Setor da máquina", size: 'auto' },
                { baseProperty: "symptom", displayName: "Sintoma", size: 'auto' }
            ],
            fetchData: () => {
                const viewmodels: ServiceOrderViewmodel[] = [];
                this.serviceOrderService.readAllPendent().forEach(x => 
                    viewmodels.push(new ServiceOrderViewmodel(x))
                );

                return viewmodels;
            },
            redirectLinkFn: (model: ServiceOrderViewmodel) => {
                return `/services/service-orders/${model.id}`;
            },
            registersPerPage: 10
        }
    }


}
