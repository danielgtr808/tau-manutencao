import { Component, OnInit } from '@angular/core';
import Defect from 'src/app/backend/models/defects/defect.model';
import { DefectService } from 'src/app/backend/models/defects/defect.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../interventions.module';

@Component({
    selector: 'app-defects-data',
    templateUrl: './defects-data.component.html',
    styleUrls: ['./defects-data.component.css']
})
export class DefectsDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Defect>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private defectService: DefectService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "description", displayName: "Descrição", size: '1fr' }
            ],
            deleteDataFn: (model: Defect) => {
                this.defectService.delete(model);
            },
            fetchData: () => {
                return this.defectService.readAllActive();
            },
            registersPerPage: 10,
            redirectLinkFn: (model: Defect) => {
                return `/interventions/defects/${model.id}`;
            }
        }
    }

}
