import { Component, Input } from '@angular/core';
import SummaryData from './summary-data.type';

@Component({
    selector: 'app-summary-container',
    templateUrl: './summary-container.component.html',
    styleUrls: ['./summary-container.component.css']
})
export class SummaryContainerComponent {

    @Input() summaryData: SummaryData[] = [];
    @Input() title: string = "";

    constructor() { }

}
