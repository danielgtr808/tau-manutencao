import { Component } from '@angular/core';
import { LoginService } from 'src/app/backend/login/login.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

    constructor(public loginService: LoginService) { }

    logOut(): void {
        this.loginService.logOut();
    }

}
