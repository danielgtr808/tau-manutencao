import { Component, Input } from '@angular/core';
import SubPageLink from '../content-top-menu/sub-page-link.model';
import DataTableConfiguration from '../data-table/data-table-configuration.model';

@Component({
    selector: 'app-default-data-page',
    templateUrl: './default-data-page.component.html',
    styleUrls: ['./default-data-page.component.css']
})
export class DefaultDataPageComponent {

    @Input() dataTableConfiguration: DataTableConfiguration<any> | undefined;
    @Input() moduleTitle: string = "";
    @Input() newRegisterLink: string = "";
    @Input() subPageLinks: SubPageLink[] = [];

    constructor() { }

}
