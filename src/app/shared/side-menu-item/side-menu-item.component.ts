import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-menu-item',
    templateUrl: './side-menu-item.component.html',
    styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {

    @Input() routerLink: string = '';
    @Input() type: "Dashboard" | "Intervenções" | "Mão de obra" | "Recursos" | "Relatórios" |"Serviços" = "Dashboard"

    constructor() { }

    ngOnInit(): void {
    }

}
