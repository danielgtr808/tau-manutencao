import { Component, Input, OnInit } from '@angular/core';
import CrudTableConfiguration from './crud-table-configuration.model';
import fullTextSearch from '../helpers/full-text-search.function';
import SimpleObject from '../helpers/simple-object.type';
import DataTableConfiguration from '../data-table/data-table-configuration.model';

@Component({
    selector: 'app-crud-table',
    templateUrl: './crud-table.component.html',
    styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

    @Input() crudTableConfiguration!: CrudTableConfiguration<any>;

    public canLoadMore: boolean = false;
    public data: SimpleObject[] = [];
    public filteredData: SimpleObject[] | undefined;

    private lastRegister: any;
    private lastSearchTerm: string = "";

    constructor() { }

    get gridColumns(): string {
        let style: string = "";

        for(let columnConfiguration of this.crudTableConfiguration.columnOrder) {
            style += `${columnConfiguration.size} `
        }

        return `${style}auto`
    }

    ngOnInit(): void {
        if(!this.crudTableConfiguration) {
            console.error('É necessário fornecer o parâmetro de entrada "crudTableConfiguration".')
        }
        else {
            this.data = this.crudTableConfiguration.fetchData(
                this.crudTableConfiguration.registersPerPage
            );
        }
    }

    filterData(searchTerm: string): void {
        if(searchTerm === "") {
            this.filteredData = undefined;
            return;
        }

        this.lastSearchTerm = searchTerm;
        this.filteredData = fullTextSearch(this.lastSearchTerm, this.data);
    }

    loadMore(): void {
        const newData = this.crudTableConfiguration.fetchData(
            this.crudTableConfiguration.registersPerPage,
            this.lastRegister
        );

        this.canLoadMore = (newData.length === this.crudTableConfiguration.registersPerPage)
        if(newData.length === 0) {
            return;
        }

        this.lastRegister = newData[newData.length - 1];
        this.data.push(...newData);

        if(this.filteredData) {
            this.filterData(this.lastSearchTerm);
        }
    }

}
