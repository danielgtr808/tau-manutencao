import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import { MachineService } from '../machines/machine.service';
import Tag from './tag.model';

@Injectable({
    providedIn: 'root'
})
export class TagService {

    public readonly storageKey = "tags";
    private readonly keysStorageKey = "tags-keys";


    constructor(
        private defaultBehaviorService: DefaultBehaviorService
    ) { }

    private get tags(): Tag[] {
        const machineFamiliesString = localStorage.getItem(this.storageKey);
        if(machineFamiliesString === null) {
            return [];
        }

        return JSON.parse(machineFamiliesString);
    }

    // private getNextKeyNumber(prefix: string): number {
    //     const keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '{}') as {[key: string]: number}
    //     const nextKey = (keys[prefix] ?? 0) + 1;

    //     keys[prefix] = nextKey;
    //     localStorage.setItem(this.keysStorageKey, JSON.stringify(keys));

    //     return nextKey;
    // }

    private getNextKeyNumber(prefix: string): number {
        const keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '{}') as {[key: string]: number}
        return (keys[prefix] ?? 0) + 1;
    }

    private incrementKeyNumber(prefix: string) {
        const keys = JSON.parse(localStorage.getItem(this.keysStorageKey) ?? '{}') as {[key: string]: number}
        keys[prefix] = (keys[prefix] ?? 0) + 1;

        localStorage.setItem(this.keysStorageKey, JSON.stringify(keys));
    }

    create(model: Tag): Result<undefined, string> {
        const createResult = this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey,
            `${model.machineId}` + `-${this.getNextKeyNumber(model.machineId)}`
        );

        if(!createResult.success) {
            return createResult;
        }

        this.incrementKeyNumber(model.machineId);
        return createResult;
    }

    read(id: string): Tag | undefined {
        return this.tags.find(x => x.id === id);
    }

    readAll(): Tag[] {
        return sortAscending(this.tags, "id");
    }

    readAllActive(): Tag[] {
        return sortAscending(
            this.tags.filter(x => x.isActive === true),
            "id"
        );
    }

    update(model: Tag): Result<undefined, string> {
        return { result: undefined, success: true }
    }

    private validate(newModel: Tag, oldModels: Tag[]): Result<undefined, string> {
        return { result: undefined, success: true }
    }
}
