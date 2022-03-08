import { Component } from '@angular/core';
import ServiceSolicitation from 'src/app/backend/service-solicitation/service-solicitation.model';
import { ServiceSolicitationService } from 'src/app/backend/service-solicitation/service-solicitation.service';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

    public dataTableConfiguration: DataTableConfiguration<ServiceSolicitation> = {
        columnOrder: [
            { baseProperty: "id", displayName: "ID", size: "auto" },
            { baseProperty: "machine", displayName: "Máquina", size: "1fr" },
            { baseProperty: "machineTag", displayName: "TAG da máquina", size: "auto" },
            { baseProperty: "sector", displayName: "Setor", size: "auto" },
            { baseProperty: "symptom", displayName: "Sintoma", size: "auto" }
        ],
        fetchData: () => { return this._data; },
        // redirectLinkFn: (model: ServiceSolicitation) => {
        //     return ""
        // }
    }

    private _data: ServiceSolicitation[] = [];

    constructor(private serviceSolicitationService: ServiceSolicitationService) {
        this._data = this.serviceSolicitationService.readAllPendent();
    }

    get pendentSsQuantity(): number {
        return this._data.length;
    }

}
