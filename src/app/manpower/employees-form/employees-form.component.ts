import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Employee from 'src/app/backend/models/employees/employee.model';
import { EmployeeService } from 'src/app/backend/models/employees/employee.service';
import EmployeeValidator from 'src/app/backend/models/employees/employee.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-employees-form',
    templateUrl: './employees-form.component.html',
    styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent{

    public employeeForm = this.typedFormBuilder.group(
        { } as Employee,
        {
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            name: true
        },
        new EmployeeValidator()
    )    

    constructor(
        private employeeService: EmployeeService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.employeeService.create.bind(this.employeeService)
    }

    get formGroup(): FormGroup {
        return this.employeeForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.employeeService.read.bind(this.employeeService)
    }

}
