
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import ServiceSolicitation from './service-solicitation.model';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { ServiceOrderService } from '../service-order/service-order.service';
import sortDescending from 'src/app/shared/helpers/sort-descending.function';

@Injectable({
    providedIn: 'root'
})
export class ServiceSolicitationService {
    
    public readonly storageKey = "service-solicitations";
    private readonly keysStorageKey = "service-solicitations-key";

    constructor(
        private defaultBehaviorService: DefaultBehaviorService,
        private serviceOrderService: ServiceOrderService
    ) { }

    private get serviceSolicitations(): ServiceSolicitation[] {
        const serviceSolicitationsString = localStorage.getItem(this.storageKey);
        if(serviceSolicitationsString === null) {
            return [];
        }

        return JSON.parse(serviceSolicitationsString);
    }

    private getNextKeyNumber(): number {
        let keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '0') as number;
        const nextKey = keys + 1;

        keys = nextKey;
        localStorage.setItem(this.keysStorageKey, JSON.stringify(keys));

        return nextKey;
    }

    create(model: ServiceSolicitation): Result<undefined, string> {
        model.status = "Pendente";
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey,
            this.getNextKeyNumber()
        );
    }

    read(id: string): ServiceSolicitation | undefined {
        return this.serviceSolicitations.find(x => x.id === id);
    }

    readAllPendent(): ServiceSolicitation[] {
        return sortAscending(
            this.serviceSolicitations.filter(x => x.status === "Pendente"),
            "id"
        );
    }

    readLatestPendent(maxQuantity: number): ServiceSolicitation[] {
        return sortDescending(
            this.readAllPendent(),
            "id"
        ).slice(0, maxQuantity);
    }


    update(model: ServiceSolicitation): Result<undefined, string> {
        const ssUpdateResult = this.defaultBehaviorService.update(model, this.validate.bind(this), this.storageKey);

        if(model.status !== "Aprovada") {
            return ssUpdateResult;
        }

        return this.serviceOrderService.create(model);
    }

    private validate(newModel: ServiceSolicitation, oldModels: ServiceSolicitation[]): Result<undefined, string> {
        if(newModel.status === "Reprovada" && newModel.reprovationReason.trim() === '') {
            return {
                errorMessage: "Ao reprovar uma SS, é necessário fornecer um motivo para a reprovação",
                success: false
            }
        }

        return { result: undefined, success: true }
    }
}
