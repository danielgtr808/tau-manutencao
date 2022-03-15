import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import Machine from './machine.model';

@Injectable({
    providedIn: 'root'
})
export class MachineService {

    public readonly storageKey = "machines";
    private readonly keysStorageKey = "machines-keys";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get machines(): Machine[] {
        const machinesString = localStorage.getItem(this.storageKey);
        if(machinesString === null) {
            return [];
        }

        return JSON.parse(machinesString);
    }

    private getNextKeyNumber(prefix: string): number {
        const keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '{}') as {[key: string]: number}
        return (keys[prefix] ?? 0) + 1;
    }

    private incrementKeyNumber(prefix: string) {
        const keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '{}') as {[key: string]: number}
        keys[prefix] = (keys[prefix] ?? 0) + 1;

        localStorage.setItem(this.keysStorageKey, JSON.stringify(keys));
    }

    create(model: Machine): Result<undefined, string> {
        const createResult = this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey,
            `${model.familyPrefix}` + `${this.getNextKeyNumber(model.familyPrefix)}`.padStart(3, '0')
        );

        if(!createResult.success) {
            return createResult;
        }

        this.incrementKeyNumber(model.familyPrefix);
        return createResult;
    }

    delete(model: Machine): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: string): Machine | undefined {
        return this.machines.find(x => x.id === id);
    }

    readAll(): Machine[] {
        return sortAscending(this.machines, "name");
    }

    readAllActive(): Machine[] {
        return sortAscending(
            this.machines.filter(x => x.isActive === true),
            "name"
        );
    }

    update(model: Machine): Result<undefined, string> {
        return this.defaultBehaviorService.update(model, this.validate.bind(this), this.storageKey);
    }

    private validate(newModel: Machine, oldModels: Machine[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase()
        )) {
            return { errorMessage: "Já existe uma máquina com esse nome.", success: false };
        }

        return { result: undefined, success: true }
    }
    
}
