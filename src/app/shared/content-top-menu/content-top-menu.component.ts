import { Component, Input } from '@angular/core';
import SubPageLink from './sub-page-link.model';

@Component({
    selector: 'app-content-top-menu',
    templateUrl: './content-top-menu.component.html',
    styleUrls: ['./content-top-menu.component.css']
})
export class ContentTopMenuComponent {

    @Input() moduleTitle: string = "";
    @Input() subPageLinks: SubPageLink[] = [];

    constructor() { }

}
