import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Cause from 'src/app/backend/models/causes/cause.model';
import { CauseService } from 'src/app/backend/models/causes/cause.service';
import CauseValidator from 'src/app/backend/models/causes/cause.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-causes-form',
    templateUrl: './causes-form.component.html',
    styleUrls: ['./causes-form.component.css']
})
export class CausesFormComponent {

    public causeForm = this.typedFormBuilder.group(
        { } as Cause,
        {
            createdBy: false,
            creationDate: false,
            description: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
        },
        new CauseValidator()
    )
    
    constructor(
        private causeService: CauseService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.causeService.create.bind(this.causeService)
    }

    get formGroup(): FormGroup {
        return this.causeForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.causeService.read.bind(this.causeService)
    }

    get updateCallback() {
        return this.causeService.update.bind(this.causeService)
    }

}
