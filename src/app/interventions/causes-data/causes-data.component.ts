import { Component } from '@angular/core';
import Cause from 'src/app/backend/models/causes/cause.model';
import { CauseService } from 'src/app/backend/models/causes/cause.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../interventions.module';

@Component({
    selector: 'app-causes-data',
    templateUrl: './causes-data.component.html',
    styleUrls: ['./causes-data.component.css']
})
export class CausesDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Cause>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private causeService: CauseService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "description", displayName: "Descrição", size: '1fr' }
            ],
            deleteDataFn: (model: Cause) => {
                this.causeService.delete(model);
            },
            fetchData: () => {
                return this.causeService.readAllActive();
            },
            registersPerPage: 10,
            redirectLinkFn: (model: Cause) => {
                return `/interventions/causes/${model.id}`;
            }
        }
    }

}
