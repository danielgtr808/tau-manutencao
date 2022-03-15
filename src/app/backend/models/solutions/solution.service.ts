import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import Solution from './solution.model';

@Injectable({
    providedIn: 'root'
})
export class SolutionService {

    public readonly storageKey = "solutions";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get solutions(): Solution[] {
        const solutionsString = localStorage.getItem(this.storageKey);
        if(solutionsString === null) {
            return [];
        }

        return JSON.parse(solutionsString);
    }

    create(model: Solution): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    delete(model: Solution): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Solution | undefined {
        return this.solutions.find(x => x.id === id);
    }

    readAll(): Solution[] {
        return sortAscending(this.solutions, "description");
    }

    readAllActive(): Solution[] {
        return sortAscending(
            this.solutions.filter(x => x.isActive === true),
            "description"
        );
    }

    update(model: Solution): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Solution, oldModels: Solution[]): Result<undefined, string> {
        if(oldModels.find(x => x.description.toLowerCase() === newModel.description.toLowerCase())) {
            return { errorMessage: "Já existe uma solução com essa descrição", success: false };
        }

        return { result: undefined, success: true }
    }

}
