import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Department from 'src/app/backend/departments/department.model';
import { DepartmentService } from 'src/app/backend/departments/department.service';
import DepartmentValidator from 'src/app/backend/departments/department.validator';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';
import { subPageLinks } from '../manpower.module';

@Component({
  selector: 'app-department-data',
  templateUrl: './department-data.component.html',
  styleUrls: ['./department-data.component.css']
})
export class DepartmentDataComponent {

    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
    
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
    public pageTitle: string = "Novo departamento";
    public subPageLinks: SubPageLink[] = subPageLinks;
    
    private _idParam: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private departmentService: DepartmentService,
        private router: Router,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this._idParam = this.activatedRoute.snapshot.params['id'] || "";
        if(this._idParam !== "new") {
            const modelToUpdate = departmentService.read(parseInt(this._idParam));
            if(!modelToUpdate) return;

            this.departmentForm.setValue(modelToUpdate);
            this.pageTitle = "Editar departamento";
        }
    }

    get formGroup(): FormGroup {
        return this.departmentForm as unknown as FormGroup;
    }

    saveChanges() {
        if(this.departmentForm.invalid) {
            this.departmentForm.markAllAsTouched();
            return;
        }

        const result = this._idParam === "new" ?
            this.departmentService.create(this.departmentForm.value) :
            this.departmentService.update(this.departmentForm.value);
             
        if(!result.success) {
            this.errorMessageComponent?.showMessage(result.errorMessage);
            return;
        }

        this.router.navigateByUrl('/manpower/departments')
    }

}
