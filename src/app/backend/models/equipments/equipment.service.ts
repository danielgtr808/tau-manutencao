import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import Equipment from './equipment.model';

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    public readonly storageKey = "equipments";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get equipments(): Equipment[] {
        const equipmentsString = localStorage.getItem(this.storageKey);
        if(equipmentsString === null) {
            return [];
        }

        return JSON.parse(equipmentsString);
    }

    create(model: Equipment): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    delete(model: Equipment): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Equipment | undefined {
        return this.equipments.find(x => x.id === id);
    }

    readAll(): Equipment[] {
        return sortAscending(this.equipments, "name");
    }

    readAllActive(): Equipment[] {
        return sortAscending(
            this.equipments.filter(x => x.isActive === true),
            "name"
        );
    }

    update(model: Equipment): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Equipment, oldModels: Equipment[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase() &&
            x.machineName === newModel.machineName
        )) {
            return { errorMessage: "Essa máquina já possui um equipamento com esse nome.", success: false };
        }

        return { result: undefined, success: true }
    }

}
