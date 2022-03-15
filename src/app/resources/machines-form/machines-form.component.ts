import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Department from 'src/app/backend/models/departments/department.model';
import { DepartmentService } from 'src/app/backend/models/departments/department.service';
import MachineFamily from 'src/app/backend/models/machine-families/machine-family.model';
import { MachineFamilyService } from 'src/app/backend/models/machine-families/machine-family.service';
import Machine from 'src/app/backend/models/machines/machine.model';
import { MachineService } from 'src/app/backend/models/machines/machine.service';
import MachineValidator from 'src/app/backend/models/machines/machine.validator';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-machines-form',
    templateUrl: './machines-form.component.html',
    styleUrls: ['./machines-form.component.css']
})
export class MachinesFormComponent {

    public departmentSelectAnswerConfiguration: SelectAnswerConfiguration<Department> = {
        data: this.departmentService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    }
    public machineForm = this.typedFormBuilder.group(
        { } as Machine,
        {
            createdBy: false,
            creationDate: false,
            departmentName: true,
            familyName: true,
            familyPrefix: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            image: true,
            name: true
        },
        new MachineValidator()
    );
    public machineFamilySelectAnswerConfiguration: SelectAnswerConfiguration<MachineFamily> = {
        data: this.machineFamilyService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    };
    public isUpdate: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private departmentService: DepartmentService,
        private machineService: MachineService,
        private machineFamilyService: MachineFamilyService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this.isUpdate = this.activatedRoute.snapshot.params['id'] !== "new";
    }

    get createCallback() {
        return (model: Machine) => {
            model.familyPrefix = this.machineFamilySelectAnswerConfiguration.data.find(x => x.name === model.familyName)!.prefix;
            return this.machineService.create(model);
        }
    }

    get formGroup(): FormGroup {
        return this.machineForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.machineService.read.bind(this.machineService)
    }

    get updateCallback() {
        return this.machineService.update.bind(this.machineService)        
    }

}
