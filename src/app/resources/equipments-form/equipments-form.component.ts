import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Equipment from 'src/app/backend/models/equipments/equipment.model';
import { EquipmentService } from 'src/app/backend/models/equipments/equipment.service';
import EquipmentValidator from 'src/app/backend/models/equipments/equipment.validator';
import Machine from 'src/app/backend/models/machines/machine.model';
import { MachineService } from 'src/app/backend/models/machines/machine.service';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-equipments-form',
    templateUrl: './equipments-form.component.html',
    styleUrls: ['./equipments-form.component.css']
})
export class EquipmentsFormComponent {

    public equipmentForm = this.typedFormBuilder.group(
        { } as Equipment,
        {
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            machineName: true,
            name: true
        },
        new EquipmentValidator()
    );
    public machineSelectAnswerConfiguration: SelectAnswerConfiguration<Machine> = {
        data: this.machineService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    }
    public isUpdate: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private equipmentService: EquipmentService,
        private machineService: MachineService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this.isUpdate = this.activatedRoute.snapshot.params['id'] !== "new";
    }

    get createCallback() {
        return this.equipmentService.create.bind(this.equipmentService)
    }

    get formGroup(): FormGroup {
        return this.equipmentForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.equipmentService.read.bind(this.equipmentService)
    }

    get updateCallback() {
        return this.equipmentService.update.bind(this.equipmentService)
    }

}
