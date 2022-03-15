import { Component } from '@angular/core';
import { ServiceOrderService } from 'src/app/backend/models/service-order/service-order.service';
import ServiceSolicitation from 'src/app/backend/models/service-solicitation/service-solicitation.model';
import { ServiceSolicitationService } from 'src/app/backend/models/service-solicitation/service-solicitation.service';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

    private _corretiveSOQtd: number;
    private _serviceSolicitations: ServiceSolicitation[] = [];
    private _preditiveSOQtd: number;
    private _preventiveSOQtd: number;
    
    public dataTableConfiguration: DataTableConfiguration<ServiceSolicitation>;

    constructor(
        private serviceOrderService: ServiceOrderService,
        private serviceSolicitationService: ServiceSolicitationService
    ) {
        const SOQuantities = this.serviceOrderService.readAllTypesQuantity();
        this._corretiveSOQtd = SOQuantities.Corretiva;
        this._preditiveSOQtd = SOQuantities.Preditiva;
        this._preventiveSOQtd = SOQuantities.Preditiva;

        this._serviceSolicitations = this.serviceSolicitationService.readLatestPendent(10);

        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "id", displayName: "N° SS", size: 'auto' },
                { baseProperty: "machineName", displayName: "Máquina", size: '1fr' },
                { baseProperty: "machineTag", displayName: "Tag da máquina", size: 'auto' },
                { baseProperty: "sectorName", displayName: "Setor da máquina", size: 'auto' },
                { baseProperty: "symptom", displayName: "Sintoma", size: 'auto' }
            ],
            fetchData: () => {    
                return this._serviceSolicitations;
            },
            redirectLinkFn: (model: ServiceSolicitation) => {
                return `/services/service-solicitations/${model.id}`;
            },
            registersPerPage: 10
        }
    }

    get correctiveSOQtd(): number {
        return this._corretiveSOQtd;
    }

    get preditiveSOQtd(): number {
        return this._preditiveSOQtd;
    }

    get preventiveSOQtd(): number {
        return this._preventiveSOQtd;
    }

    get SSQtd(): number {
        return this._serviceSolicitations.length;
    }

}
