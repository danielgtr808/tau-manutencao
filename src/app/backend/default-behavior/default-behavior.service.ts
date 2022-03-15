import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import getTodayDateISO from 'src/app/shared/helpers/get-today-date-iso.function';
import Result from 'src/app/shared/helpers/result.type';
import { LoginService } from '../models/login/login.service';
import DefaultValidator from './default-validator.type';
import Default from './default.model';

@Injectable({
    providedIn: 'root'
})
export class DefaultBehaviorService {

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    create<T extends Default>(data: T, validator: DefaultValidator<T>, storageKey: string, customId: any = undefined): Result<undefined, string> {
        if(!this.loginService.user) {
            this.router.navigateByUrl('');
            return { errorMessage: "Você precisa estar autenticado para realizar esta ação.", success: false }
        }

        const allData = JSON.parse(localStorage.getItem(storageKey) ?? '[]') as T[];
        const validationResult = validator(data, allData);

        if(!validationResult.success) {
            return validationResult;
        }

        data.createdBy = this.loginService.user.email;
        data.id = customId === undefined ? this.idGenerator() : customId;
        data.isActive = true;
        data.lastEditedBy = data.createdBy;
        data.creationDate = getTodayDateISO();
        data.lastEditionDate = data.creationDate;

        allData.push(data);
        localStorage.setItem(storageKey, JSON.stringify(allData));
        
        return { result: undefined, success: true }
    }

    // Créditos para Zach Weber
    // O código foi levemente alterado, mas, o original pode ser encontrado aqui:
    // https://medium.com/@weberzt/how-to-create-a-random-id-in-javascript-e92b39fedaef
    //
    // data de acesso: 2020/03/12 - 00:55
    private idGenerator(): string {
        let ID = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < 12; i++ ) {
            ID += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return ID;
    }

    update<T extends Default>(data: T, validator: DefaultValidator<T>, storageKey: string): Result<undefined, string> {
        if(!this.loginService.user) {
            this.router.navigateByUrl('');
            return { errorMessage: "Você precisa estar autenticado para realizar esta ação.", success: false }
        }

        const allData = JSON.parse(localStorage.getItem(storageKey) ?? '[]') as T[];
        const dataToEditIndex = allData.findIndex(x => x.id === data.id);

        if(dataToEditIndex === -1) {
            return { errorMessage: "Registro não encontrado, verifique se ele não foi excluindo enquanto você o editava.", success: false }
        }
        
        allData.splice(dataToEditIndex, 1);

        const validationResult = validator(data, allData);
        if(!validationResult.success) {
            return validationResult;
        }

        data.lastEditedBy = this.loginService.user.email;
        data.lastEditionDate = data.createdBy;
        allData.push(data);

        localStorage.setItem(storageKey, JSON.stringify(allData));
        return { result: undefined, success: true }
    }

    delete(data: Default, storageKey: string): Result<undefined, string> {
        if(!this.loginService.user) {
            this.router.navigateByUrl('');
            return { errorMessage: "Você precisa estar autenticado para realizar esta ação.", success: false }
        }

        data.isActive = false;
        data.lastEditedBy = this.loginService.user.email;
        data.lastEditionDate = data.createdBy;  

        const allData = JSON.parse(localStorage.getItem(storageKey) ?? '[]') as Default[];
        allData.splice(allData.findIndex(x => x.id === data.id), 1);
        allData.push(data);

        localStorage.setItem(storageKey, JSON.stringify(allData));
        return { result: undefined, success: true }
    }

}
