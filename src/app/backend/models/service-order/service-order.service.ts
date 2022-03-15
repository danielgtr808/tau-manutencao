import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import ServiceSolicitation from '../service-solicitation/service-solicitation.model';
import ServiceOrderType from './service-order-type.enum';
import ServiceOrder from './service-order.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceOrderService {

    public readonly storageKey = "service-order";
    private readonly keysStorageKey = "service-order-key";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get serviceOrders(): ServiceOrder[] {
        const serviceOrdersString = localStorage.getItem(this.storageKey);
        if(serviceOrdersString === null) {
            return [];
        }

        return JSON.parse(serviceOrdersString);
    }

    private getNextKeyNumber(): number {
        let keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '0') as number;
        const nextKey = keys + 1;

        keys = nextKey;
        localStorage.setItem(this.keysStorageKey, JSON.stringify(keys));

        return nextKey;
    }

    create(model: ServiceSolicitation): Result<undefined, string> {       
        return this.defaultBehaviorService.create(
            {
                baseSS: model,
                conclusion: '',
                createdBy: '',
                creationDate: '',
                id: 0,
                isActive: true,
                lastEditedBy: '',
                lastEditionDate: '',
                responsibleForMaintenance: '',
                reprovationReason: '',
                serviceSolicitationId: model.id,
                status: "Pendente"
            },
            this.validate.bind(this),
            this.storageKey,
            this.getNextKeyNumber()
        );
    }

    read(id: number): ServiceOrder | undefined {
        id = parseInt(`${id}`);
        return this.serviceOrders.find(x => x.id === id);
    }

    readAllTypesQuantity(): {[key in ServiceOrderType]: number} {
        const allPendent = this.readAllPendent();
        return {
            "Corretiva": allPendent.filter(x => x.baseSS.serviceOrderType === "Corretiva").length,
            "Preditiva": allPendent.filter(x => x.baseSS.serviceOrderType === "Preditiva").length,
            "Preventiva": allPendent.filter(x => x.baseSS.serviceOrderType === "Preventiva").length
        }
    }

    readAllPendent(): ServiceOrder[] {
        return this.serviceOrders.filter(x => x.status === "Pendente");
    }

    update(model: ServiceOrder): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: ServiceOrder, oldModels: ServiceOrder[]): Result<undefined, string> {
        return { result: undefined, success: true }
    }
}
