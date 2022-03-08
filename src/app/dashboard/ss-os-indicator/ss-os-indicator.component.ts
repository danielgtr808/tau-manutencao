import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ss-os-indicator',
    templateUrl: './ss-os-indicator.component.html',
    styleUrls: ['./ss-os-indicator.component.css']
})
export class SsOsIndicatorComponent {

    @Input() iconAndLabel: "OS corretivas" | "OS preditivas" | "OS preventivas" | "SS pendentes" = "SS pendentes"
    @Input() value: any = "0"

    constructor() { }

}
