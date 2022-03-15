import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/backend/models/login/login.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

    @Output() closeAction = new EventEmitter();

    constructor(public loginService: LoginService) { }

    collapseButtonClick() {
        this.closeAction.emit()
    }

    logOut(): void {
        this.loginService.logOut();
        this.closeAction.emit();
    }

    sideMenuClick() {
        this.closeAction.emit();
    }

}
