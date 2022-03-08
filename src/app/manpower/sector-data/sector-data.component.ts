import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Department from 'src/app/backend/departments/department.model';
import { DepartmentService } from 'src/app/backend/departments/department.service';
import DepartmentValidator from 'src/app/backend/departments/department.validator';
import Sector from 'src/app/backend/sectors/sector.model';
import { SectorService } from 'src/app/backend/sectors/sector.service';
import SectorValidator from 'src/app/backend/sectors/sector.validator';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';
import { subPageLinks } from '../manpower.module';

@Component({
    selector: 'app-sector-data',
    templateUrl: './sector-data.component.html',
    styleUrls: ['./sector-data.component.css']
})
export class SectorDataComponent {

    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
    
    public sectorForm = this.typedFormBuilder.group(
        { } as Sector,
        {
            createdBy: false,
            creationDate: false,
            departmentId: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            name: true
        },
        new SectorValidator()
    );
    public departmentSelectAnswerConfiguration: SelectAnswerConfiguration<Department> = {
        data: this.departmentService.readAll(),
        idProperty: "id",
        valueProperty: "name"
    }
    public pageTitle: string = "Novo setor";
    public subPageLinks: SubPageLink[] = subPageLinks;
    
    private _idParam: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private departmentService: DepartmentService,
        private router: Router,
        private sectorService: SectorService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this._idParam = this.activatedRoute.snapshot.params['id'] || "";
        if(this._idParam !== "new") {
            const modelToUpdate = sectorService.read(parseInt(this._idParam));
            if(!modelToUpdate) return;

            this.sectorForm.setValue(modelToUpdate);
            this.pageTitle = "Editar setor";
        }
    }

    get formGroup(): FormGroup {
        return this.sectorForm as unknown as FormGroup;
    }

    saveChanges() {
        if(this.sectorForm.invalid) {
            this.sectorForm.markAllAsTouched();
            return;
        }

        const result = this._idParam === "new" ?
            this.sectorService.create(this.sectorForm.value) :
            this.sectorService.update(this.sectorForm.value);
             
        if(!result.success) {
            this.errorMessageComponent?.showMessage(result.errorMessage);
            return;
        }

        this.router.navigateByUrl('/manpower/sectors')
    }

}
