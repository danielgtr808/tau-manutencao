import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Employee from 'src/app/backend/employees/employee.model';
import { EmployeeService } from 'src/app/backend/employees/employee.service';
import EmployeeValidator from 'src/app/backend/employees/employee.validator';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';
import { subPageLinks } from '../manpower.module';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent {
    
    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
    
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
    public pageTitle: string = "Novo colaborador";
    public subPageLinks: SubPageLink[] = subPageLinks;
    
    private _idParam: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService,
        private router: Router,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this._idParam = this.activatedRoute.snapshot.params['id'] || "";
        if(this._idParam !== "new") {
            const modelToUpdate = employeeService.read(parseInt(this._idParam));
            if(!modelToUpdate) return;

            this.employeeForm.setValue(modelToUpdate);
            this.pageTitle = "Editar colaborador";
        }
    }

    get createCallback() {
        return this.employeeService.create.bind(this.employeeService)
    }

    get formGroup(): FormGroup {
        return this.employeeForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.employeeService.read.bind(this.employeeService)
    }

    get updateCallback() {
        return this.employeeService.update.bind(this.employeeService)
    }

    saveChanges() {
        if(this.employeeForm.invalid) {
            this.employeeForm.markAllAsTouched();
            return;
        }

        const result = this._idParam === "new" ?
            this.employeeService.create(this.employeeForm.value) :
            this.employeeService.update(this.employeeForm.value);
             
        if(!result.success) {
            this.errorMessageComponent?.showMessage(result.errorMessage);
            return;
        }

        this.router.navigateByUrl('/manpower/employees')
    }

}
