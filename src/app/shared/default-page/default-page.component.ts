import { Component, Input } from '@angular/core';
import SubPageLink from '../content-top-menu/sub-page-link.model';

@Component({
    selector: 'app-default-page',
    templateUrl: './default-page.component.html',
    styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {

    @Input() moduleTitle: string = "";
    @Input() subPageLinks: SubPageLink[] = [];

    constructor() { }

}
