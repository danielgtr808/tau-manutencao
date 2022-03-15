import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Symptom from 'src/app/backend/models/symptoms/symptom.model';
import { SymptomService } from 'src/app/backend/models/symptoms/symptom.service';
import SymptomValidator from 'src/app/backend/models/symptoms/symptom.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-symptoms-form',
    templateUrl: './symptoms-form.component.html',
    styleUrls: ['./symptoms-form.component.css'],
})
export class SymptomsFormComponent {

    public symptomForm = this.typedFormBuilder.group(
        { } as Symptom,
        {
            createdBy: false,
            creationDate: false,
            description: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
        },
        new SymptomValidator()
    )
    
    constructor(
        private symptomService: SymptomService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.symptomService.create.bind(this.symptomService)
    }

    get formGroup(): FormGroup {
        return this.symptomForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.symptomService.read.bind(this.symptomService)
    }

    get updateCallback() {
        return this.symptomService.update.bind(this.symptomService)
    }

}
