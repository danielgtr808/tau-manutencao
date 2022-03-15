import Cause from './cause.model';
import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';

@Injectable({
    providedIn: 'root'
})
export class CauseService {

    public readonly storageKey = "causes";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get causes(): Cause[] {
        const departmentsString = localStorage.getItem(this.storageKey);
        if(departmentsString === null) {
            return [];
        }

        return JSON.parse(departmentsString);
    }

    create(model: Cause): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    delete(model: Cause): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Cause | undefined {
        return this.causes.find(x => x.id === id);
    }

    readAll(): Cause[] {
        return sortAscending(this.causes, "description");
    }

    readAllActive(): Cause[] {
        return sortAscending(
            this.causes.filter(x => x.isActive === true),
            "description"
        );
    }

    update(model: Cause): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Cause, oldModels: Cause[]): Result<undefined, string> {
        if(oldModels.find(x => x.description.toLowerCase() === newModel.description.toLowerCase())) {
            return { errorMessage: "Já existe uma causa com essa descrição", success: false };
        }

        return { result: undefined, success: true }
    }
}
