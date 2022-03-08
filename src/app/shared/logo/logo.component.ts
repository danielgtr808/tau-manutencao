import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: []
})
export class LogoComponent {

    @Input() size: "large" | "small" = "large"

}
