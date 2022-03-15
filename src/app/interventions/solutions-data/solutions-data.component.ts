import { Component } from '@angular/core';
import Solution from 'src/app/backend/models/solutions/solution.model';
import { SolutionService } from 'src/app/backend/models/solutions/solution.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../interventions.module';

@Component({
  selector: 'app-solutions-data',
  templateUrl: './solutions-data.component.html',
  styleUrls: ['./solutions-data.component.css']
})
export class SolutionsDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Solution>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private solutionService: SolutionService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "description", displayName: "Descrição", size: '1fr' }
            ],
            deleteDataFn: (model: Solution) => {
                this.solutionService.delete(model);
            },
            fetchData: () => {
                return this.solutionService.readAllActive();
            },
            registersPerPage: 10,
            redirectLinkFn: (model: Solution) => {
                return `/interventions/solutions/${model.id}`;
            }
        }
    }

}
