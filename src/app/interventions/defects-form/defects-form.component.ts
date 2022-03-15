import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Defect from 'src/app/backend/models/defects/defect.model';
import { DefectService } from 'src/app/backend/models/defects/defect.service';
import DefectValidator from 'src/app/backend/models/defects/defect.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-defects-form',
    templateUrl: './defects-form.component.html',
    styleUrls: ['./defects-form.component.css']
})
export class DefectsFormComponent {

    public defectForm = this.typedFormBuilder.group(
        { } as Defect,
        {
            createdBy: false,
            creationDate: false,
            description: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
        },
        new DefectValidator()
    )
    
    constructor(
        private defectService: DefectService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.defectService.create.bind(this.defectService)
    }

    get formGroup(): FormGroup {
        return this.defectForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.defectService.read.bind(this.defectService)
    }

    get updateCallback() {
        return this.defectService.update.bind(this.defectService)
    }

}
