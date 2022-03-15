import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Department from 'src/app/backend/models/departments/department.model';
import { DepartmentService } from 'src/app/backend/models/departments/department.service';
import Sector from 'src/app/backend/models/sectors/sector.model';
import { SectorService } from 'src/app/backend/models/sectors/sector.service';
import SectorValidator from 'src/app/backend/models/sectors/sector.validator';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-sector-form',
    templateUrl: './sector-form.component.html',
    styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent {

    public isUpdate: boolean;
    public sectorForm = this.typedFormBuilder.group(
        { } as Sector,
        {
            createdBy: false,
            creationDate: false,
            departmentName: true,
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
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private departmentService: DepartmentService,
        private sectorService: SectorService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this.isUpdate = this.activatedRoute.snapshot.params['id'] !== "new";
    }

    get createCallback() {
        return this.sectorService.create.bind(this.sectorService)
    }

    get formGroup(): FormGroup {
        return this.sectorForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.sectorService.read.bind(this.sectorService)
    }

    get updateCallback() {
        return this.sectorService.update.bind(this.sectorService)
    }

}
