import { Component } from '@angular/core';
import ServiceSolicitation from 'src/app/backend/models/service-solicitation/service-solicitation.model';
import { ServiceSolicitationService } from 'src/app/backend/models/service-solicitation/service-solicitation.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../services.module';

@Component({
    selector: 'app-service-solicitation-data',
    templateUrl: './service-solicitation-data.component.html',
    styleUrls: ['./service-solicitation-data.component.css']
})
export class ServiceSolicitationDataComponent {

    public dataTableConfiguration: DataTableConfiguration<ServiceSolicitation>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(
        private serviceSolicitationService: ServiceSolicitationService,
    ) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "id", displayName: "N° SS", size: 'auto' },
                { baseProperty: "machineName", displayName: "Máquina", size: '1fr' },
                { baseProperty: "machineTag", displayName: "Tag da máquina", size: 'auto' },
                { baseProperty: "sectorName", displayName: "Setor da máquina", size: 'auto' },
                { baseProperty: "symptom", displayName: "Sintoma", size: 'auto' }
            ],
            fetchData: () => {
                return this.serviceSolicitationService.readAllPendent();
            },
            redirectLinkFn: (model: ServiceSolicitation) => {
                return `/services/service-solicitations/${model.id}`;
            },
            registersPerPage: 10,
        }
    }

}
