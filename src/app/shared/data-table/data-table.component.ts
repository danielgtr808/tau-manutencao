import { Component, Input, OnInit } from '@angular/core';
import DataTableConfiguration from './data-table-configuration.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    public data: {[key: string]: any}[] = [];

    @Input() dataTableConfiguration!: DataTableConfiguration<any>;
    @Input() enableSearch: boolean = false;

    constructor() { }

    get gridColumns(): string {
        let style: string = "";

        for(let columnConfiguration of this.dataTableConfiguration.columnOrder) {
            style += `${columnConfiguration.size} `
        }

        if(this.dataTableConfiguration.redirectLinkFn) {
            style = `${style}auto`
        }
        
        return style;
    }

    ngOnInit(): void {
        if(!this.dataTableConfiguration) {
            console.error("Necessário fornecer o parâmetro 'dataTableConfiguration'")
        }
        else {
            this.data = this.dataTableConfiguration.fetchData();
        }
    }

}
