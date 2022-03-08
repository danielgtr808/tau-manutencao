import { Injectable } from '@angular/core';
import ServiceSolicitation from './service-solicitation.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceSolicitationService {

    constructor() { }

    readAllPendent(): ServiceSolicitation[] {
       const ssString = localStorage.getItem("service-solicitation");
       if(ssString === null) return [];

       return (JSON.parse(ssString) as ServiceSolicitation[]).filter(x => x.status === "Pendente");
    }
}
