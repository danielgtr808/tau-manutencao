import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import Employee from './employee.model';
import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    public readonly storageKey = "employees";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get employees(): Employee[] {
        const employeesString = localStorage.getItem(this.storageKey);
        if(employeesString === null) {
            return [];
        }

        return JSON.parse(employeesString);
    }

    create(model: Employee): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        )
    }

    delete(model: Employee): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Employee | undefined {
        return this.employees.find(x => x.id === id);
    }
    
    readAll(): Employee[] {
        return sortAscending(this.employees, "name");
    }

    readAllActive(): Employee[] {
        return sortAscending(
            this.employees.filter(x => x.isActive === true),
            "name"
        );
    }

    private validate(newModel: Employee, oldModels: Employee[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase())) {
            return { errorMessage: "Já existe um funcionário com esse nome", success: false };
        }

        return { result: undefined, success: true }
    }

}
