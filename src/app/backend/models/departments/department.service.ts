import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import Department from './department.model';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    public readonly storageKey = "departments";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get departments(): Department[] {
        const departmentsString = localStorage.getItem(this.storageKey);
        if(departmentsString === null) {
            return [];
        }

        return JSON.parse(departmentsString);
    }

    create(model: Department): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        )
    }

    delete(model: Department): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Department | undefined {
        return this.departments.find(x => x.id === id);
    }

    readAll(): Department[] {
        return sortAscending(this.departments, "name");
    }

    readAllActive(): Department[] {
        return sortAscending(
            this.departments.filter(x => x.isActive === true),
            "name"
        );
    }

    private validate(newModel: Department, oldModels: Department[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase().trim() === newModel.name.toLowerCase().trim())) {
            return { errorMessage: "Já existe um departamento com esse nome", success: false };
        }

        return { result: undefined, success: true }
    }

}
