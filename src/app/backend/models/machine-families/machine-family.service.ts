import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import MachineFamily from './machine-family.model';

@Injectable({
    providedIn: 'root'
})
export class MachineFamilyService {

    public readonly storageKey = "machine-families";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get machineFamilies(): MachineFamily[] {
        const machineFamiliesString = localStorage.getItem(this.storageKey);
        if(machineFamiliesString === null) {
            return [];
        }

        return JSON.parse(machineFamiliesString);
    }

    create(model: MachineFamily): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        )
    }

    read(id: number): MachineFamily | undefined {
        return this.machineFamilies.find(x => x.id === id);
    }

    readAll(): MachineFamily[] {
        return sortAscending(this.machineFamilies, "name");
    }

    readAllActive(): MachineFamily[] {
        return sortAscending(
            this.machineFamilies.filter(x => x.isActive === true),
            "name"
        );
    }

    private validate(newModel: MachineFamily, oldModels: MachineFamily[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase())) {
            return { errorMessage: "Já existe uma família de máquinas com esse nome.", success: false };
        }

        if(oldModels.find(x => x.prefix.toLowerCase() === newModel.prefix.toLowerCase())) {
            return { errorMessage: "Já existe uma família de máquinas com esse prefixo", success: false };
        }

        return { result: undefined, success: true }
    }
}
