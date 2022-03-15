import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import DataTableConfiguration from './data-table-configuration.model';
import { DeleteModalService } from '../delete-modal/delete-modal.service';
import fullTextSearch from '../helpers/full-text-search.function';
import { ResponsiveRowComponent } from '../responsive-row/responsive-row.component';
import SimpleObject from '../helpers/simple-object.type';
/**
 * 
 */
@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @ViewChild('headerCheckbox') headerCheckbox!: ElementRef;

    @Input() dataTableConfiguration!: DataTableConfiguration<any>;
    @Input() enableSearch: boolean = false;

    public canLoadMore: boolean = false;
    public checkedData: SimpleObject[] = [];
    public data: SimpleObject[] = [];
    public filteredData: SimpleObject[] | undefined;

    private lastRegister: any;
    private lastSearchTerm: string = "";
    private propertiesToFilter: string[] = [];

    @ViewChildren(ResponsiveRowComponent) responsiveRowComponentViewChildrenRef: QueryList<ResponsiveRowComponent> | undefined;

    constructor(private deleteModalService: DeleteModalService) { }
    
    get gridColumns(): string {
        let style: string = this.dataTableConfiguration.deleteDataFn ? "auto " : "";

        for(let columnConfiguration of this.dataTableConfiguration.columnOrder) {
            style += `${columnConfiguration.size} `
        }

        return this.dataTableConfiguration.redirectLinkFn ? `${style}auto` : style
    }

    checkEvent(data: any): void {
        this.checkedData.push(data);
        this.updateHeaderCheckboxStatus();
    }

    filterData(searchTerm: string): void {
        if(searchTerm === "") {
            this.filteredData = undefined;
            return;
        }

        this.lastSearchTerm = searchTerm;
        this.filteredData = fullTextSearch(this.lastSearchTerm, this.data, this.propertiesToFilter);
    }

    headerCheckboxClick(): void {
        if(!this.responsiveRowComponentViewChildrenRef) return

        this.headerCheckbox.nativeElement.indeterminate = false;
        
        if(this.data.length === this.checkedData.length) {
            this.checkedData = [];
        }
        else {
            this.checkedData = [];
            this.checkedData.push(...this.data);
        }

    }

    isChecked(data: SimpleObject): boolean {
        return this.checkedData.find(x => x === data) ? true : false;
    }

    loadMore(): void {
        const newData = this.dataTableConfiguration.fetchData(
            this.dataTableConfiguration.registersPerPage,
            this.lastRegister
        );

        this.canLoadMore = (newData.length === this.dataTableConfiguration.registersPerPage)
        if(newData.length === 0) {
            return;
        }

        this.lastRegister = newData[newData.length - 1];
        this.data.push(...newData);

        if(this.filteredData) {
            this.filterData(this.lastSearchTerm);
        }
    }

    ngOnInit(): void {
        if(!this.dataTableConfiguration) {
            console.error("Necessário fornecer o parâmetro 'DataTableConfiguration'")
        }
        else {
            this.data = this.dataTableConfiguration.fetchData(
                this.dataTableConfiguration.registersPerPage
            );
            this.dataTableConfiguration.columnOrder.forEach(x => {
                this.propertiesToFilter.push(x.baseProperty);
            })
        }
    }

    showDeleteModal(): void {
        this.deleteModalService.showModal = true;
        const subscription = this.deleteModalService.subscribeToAction.subscribe(x => {
            if(x === "Delete") {
                this.checkedData.forEach(x => {
                    this.dataTableConfiguration.deleteDataFn!(x);
                    this.data.splice(
                        this.data.findIndex(y => y === x),
                        1
                    );
                });

                this.checkedData = [];
                this.updateHeaderCheckboxStatus();
            }

            subscription.unsubscribe();
        })
    }

    uncheckEvent(data: any): void {
        const uncheckIndex: number = this.checkedData.findIndex(x => x === data);
        if(uncheckIndex === -1) return;

        this.checkedData.splice(uncheckIndex, 1);
        this.updateHeaderCheckboxStatus();
    }

    updateData(newData: {[key: string]: any}[]) {
        this.data = newData;
    }

    private updateHeaderCheckboxStatus(): void {
        this.headerCheckbox.nativeElement.checked = this.checkedData.length === this.data.length && this.data.length > 0;
        this.headerCheckbox.nativeElement.indeterminate = this.checkedData.length > 0 && this.checkedData.length < this.data.length;
    }

}
