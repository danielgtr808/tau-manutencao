import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import ColumnOrder from '../data-table/column-order.type';

@Component({
    selector: 'app-responsive-row',
    templateUrl: './responsive-row.component.html',
    styleUrls: ['./responsive-row.component.css']
})
export class ResponsiveRowComponent implements AfterViewInit, OnChanges {

    @ViewChild('checkbox') checkbox: ElementRef | undefined;

    @Input() checked: boolean = false;
    @Input() columnOrder: ColumnOrder<any>[] = []
    @Input() data: {[key: string]: any} = { };
    @Input() hasCheckbox: boolean = false;
    @Input() redirectLink: string = "";

    @Output() checkEvent = new EventEmitter<any>();
    @Output() uncheckEvent = new EventEmitter<any>();

    constructor() { }

    checkboxClick(): void {
        if(this.checked) {
            this.uncheckEvent.emit(this.data);
        }
        else {
            this.checkEvent.emit(this.data)
        }
    }

    ngAfterViewInit (): void {
        if(!this.checkbox) return;
        this.checkbox.nativeElement.checked = this.checked;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(!this.checkbox) return;
        this.checkbox.nativeElement.checked = changes["checked"].currentValue;
    }

}
