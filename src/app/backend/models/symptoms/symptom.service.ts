import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import Symptom from './symptom.model';

@Injectable({
    providedIn: 'root'
})
export class SymptomService {

    public readonly storageKey = "symptoms";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get symptoms(): Symptom[] {
        const solutionsString = localStorage.getItem(this.storageKey);
        if(solutionsString === null) {
            return [];
        }

        return JSON.parse(solutionsString);
    }

    create(model: Symptom): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    delete(model: Symptom): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Symptom | undefined {
        return this.symptoms.find(x => x.id === id);
    }

    readAll(): Symptom[] {
        return sortAscending(this.symptoms, "description");
    }

    readAllActive(): Symptom[] {
        return sortAscending(
            this.symptoms.filter(x => x.isActive === true),
            "description"
        );
    }

    update(model: Symptom): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Symptom, oldModels: Symptom[]): Result<undefined, string> {
        if(oldModels.find(x => x.description.toLowerCase() === newModel.description.toLowerCase())) {
            return { errorMessage: "Já existe um sintoma com essa descrição", success: false };
        }

        return { result: undefined, success: true }
    }
}
