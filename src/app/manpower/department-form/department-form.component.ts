import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Department from 'src/app/backend/models/departments/department.model';
import { DepartmentService } from 'src/app/backend/models/departments/department.service';
import DepartmentValidator from 'src/app/backend/models/departments/department.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-department-form',
    templateUrl: './department-form.component.html',
    styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent {

    public departmentForm = this.typedFormBuilder.group(
        { } as Department,
        {
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            name: true
        },
        new DepartmentValidator()
    )

    constructor(
        private departmentService: DepartmentService,
        private typedFormBuilder: TypedFormBuilderService
    ) {  }

    get createCallback() {
        return this.departmentService.create.bind(this.departmentService)
    }

    get formGroup(): FormGroup {
        return this.departmentForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.departmentService.read.bind(this.departmentService)
    }

}
