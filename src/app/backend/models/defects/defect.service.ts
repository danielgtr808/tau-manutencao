import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import Defect from './defect.model';

@Injectable({
    providedIn: 'root'
})
export class DefectService {

    public readonly storageKey = "defects";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get defects(): Defect[] {
        const departmentsString = localStorage.getItem(this.storageKey);
        if(departmentsString === null) {
            return [];
        }

        return JSON.parse(departmentsString);
    }

    create(model: Defect): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    delete(model: Defect): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Defect | undefined {
        return this.defects.find(x => x.id === id);
    }

    readAll(): Defect[] {
        return sortAscending(this.defects, "description");
    }

    readAllActive(): Defect[] {
        return sortAscending(
            this.defects.filter(x => x.isActive === true),
            "description"
        );
    }

    update(model: Defect): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Defect, oldModels: Defect[]): Result<undefined, string> {
        if(oldModels.find(x => x.description.toLowerCase() === newModel.description.toLowerCase())) {
            return { errorMessage: "Já existe um defeito com essa descrição", success: false };
        }

        return { result: undefined, success: true }
    }
}
