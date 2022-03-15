import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import MachineFamily from 'src/app/backend/models/machine-families/machine-family.model';
import { MachineFamilyService } from 'src/app/backend/models/machine-families/machine-family.service';
import MachineFamilyValidator from 'src/app/backend/models/machine-families/machine-family.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-machine-families-form',
    templateUrl: './machine-families-form.component.html',
    styleUrls: ['./machine-families-form.component.css']
})
export class MachineFamiliesFormComponent {

    public machineFamilyForm = this.typedFormBuilder.group(
        { } as MachineFamily,
        {
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            name: true,
            prefix: true
        },
        new MachineFamilyValidator()
    );
    constructor(
        private machineFamilyService: MachineFamilyService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.machineFamilyService.create.bind(this.machineFamilyService)
    }

    get formGroup(): FormGroup {
        return this.machineFamilyForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.machineFamilyService.read.bind(this.machineFamilyService)
    }

}
