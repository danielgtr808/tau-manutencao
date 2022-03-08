import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { FillUserDataService } from '../fill-user-data/fill-user-data.service';
import { IdTrackerService } from '../id-tracker/id-tracker.service';
import Department from './department.model';
import DepartmentErrors from './department.result';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    constructor(
        private fillUserDataService: FillUserDataService,
        private idTrackerService: IdTrackerService
    ) { }

    private get departments(): Department[] {
        const departmentsString = localStorage.getItem("departments");
        if(departmentsString === null) {
            return [];
        }

        return JSON.parse(departmentsString);
    }

    private set departments(models: Department[]) {
        localStorage.setItem("departments", JSON.stringify(models));
    }

    create(model: Department): Result<undefined, DepartmentErrors> {
        this.fillUserDataService.fillNewRegistry(model);
        model.id = this.idTrackerService.getLastId("departments") + 1;
        model.isActive = true;

        const departments: Department[] = this.departments;

        const validationResult = this.validate(departments, model);
        if(!validationResult.success) return validationResult;

        departments.push(model);

        this.idTrackerService.incrementId("departments");
        this.departments = departments;

        return validationResult
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

    update(model: Department): Result<undefined, DepartmentErrors> {
        this.fillUserDataService.fillUpdatedRegistry(model);

        const departments = this.departments;
        departments.splice(departments.findIndex(x => x.id === model.id) , 1);

        const validationResult = this.validate(departments, model);
        if(!validationResult.success) return validationResult;

        departments.push(model);
        this.departments = departments;

        return validationResult;
    }

    private validate(oldModels: Department[], newModel: Department): Result<undefined, DepartmentErrors> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase())) {
            return { errorMessage: "Já existe um departamento com esse nome", success: false };
        }

        return { result: undefined, success: true }
    }

}
