import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-content-container',
    template: `
        <h3 *ngIf="this.title !== ''">{{this.title}}</h3>
        <ng-content></ng-content>
    `,
    styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent {

    @Input() title: string = "";

    constructor() { }

}
