import { Component } from '@angular/core';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {

    public showSideMenu: boolean = false;

    constructor() { }

    hideSidemenu() {
        this.showSideMenu = false;
    }

}
