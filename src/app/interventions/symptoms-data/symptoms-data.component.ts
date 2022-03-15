import { Component } from '@angular/core';
import Symptom from 'src/app/backend/models/symptoms/symptom.model';
import { SymptomService } from 'src/app/backend/models/symptoms/symptom.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../interventions.module';

@Component({
    selector: 'app-symptoms-data',
    templateUrl: './symptoms-data.component.html',
    styleUrls: ['./symptoms-data.component.css']
})
export class SymptomsDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Symptom>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private symptomService: SymptomService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "description", displayName: "Descrição", size: '1fr' }
            ],
            deleteDataFn: (model: Symptom) => {
                this.symptomService.delete(model);
            },
            fetchData: () => {
                return this.symptomService.readAllActive();
            },
            registersPerPage: 10,
            redirectLinkFn: (model: Symptom) => {
                return `/interventions/symptoms/${model.id}`;
            }
        }
    }

}
