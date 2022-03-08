import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { FillUserDataService } from '../fill-user-data/fill-user-data.service';
import { IdTrackerService } from '../id-tracker/id-tracker.service';
import Employee from './employee.model';
import EmployeeErrors from './employee.result';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(
        private fillUserDataService: FillUserDataService,
        private idTrackerService: IdTrackerService
    ) { }

    private get employees(): Employee[] {
        const employeesString = localStorage.getItem("employees");
        if(employeesString === null) {
            return [];
        }

        return JSON.parse(employeesString);
    }

    private set employees(models: Employee[]) {
        localStorage.setItem("employees", JSON.stringify(models));
    }

    create(model: Employee): Result<undefined, EmployeeErrors> {
        this.fillUserDataService.fillNewRegistry(model);
        model.id = this.idTrackerService.getLastId("employees") + 1;
        model.isActive = true;

        const employees: Employee[] = this.employees;

        const validationResult = this.validate(employees, model);
        if(!validationResult.success) return validationResult;

        employees.push(model);

        this.idTrackerService.incrementId("employees");
        this.employees = employees;

        return validationResult
    }

    read(id: number): Employee | undefined {
        return this.employees.find(x => x.id === id);
    }

    readAllActive(): Employee[] {
        return sortAscending(
            this.employees.filter(x => x.isActive === true),
            "name"
        );
    }

    update(model: Employee): Result<undefined, EmployeeErrors> {
        this.fillUserDataService.fillUpdatedRegistry(model);

        const employees = this.employees;
        employees.splice(employees.findIndex(x => x.id === model.id) , 1);

        const validationResult = this.validate(employees, model);
        if(!validationResult.success) return validationResult;

        employees.push(model);
        this.employees = employees;

        return validationResult;
    }

    private validate(oldModels: Employee[], newModel: Employee): Result<undefined, EmployeeErrors> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase())) {
            return { errorMessage: "Já existe um funcionário com esse nome", success: false };
        }

        return { result: undefined, success: true }
    }

}
