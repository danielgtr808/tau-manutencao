import { Injectable } from '@angular/core';
import getTodayDateISO from 'src/app/shared/helpers/get-today-date-iso.function';
import { LoginService } from '../login/login.service';
import UserData from './user-data.model';

@Injectable({
    providedIn: 'root'
})
export class FillUserDataService {

    constructor(private loginService: LoginService) { }

    fillNewRegistry(model: UserData): void {
        model.createdBy = this.loginService.user!.email;
        model.creationDate = getTodayDateISO();
        
        this.fillUpdatedRegistry(model);
    }

    fillUpdatedRegistry(model: UserData): void {
        model.lastEditedBy = this.loginService.user!.email;
        model.lastEditionDate = getTodayDateISO();
    }
}
