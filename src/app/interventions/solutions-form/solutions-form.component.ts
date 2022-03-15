import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Solution from 'src/app/backend/models/solutions/solution.model';
import { SolutionService } from 'src/app/backend/models/solutions/solution.service';
import SolutionValidator from 'src/app/backend/models/solutions/solution.validator';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-solutions-form',
    templateUrl: './solutions-form.component.html',
    styleUrls: ['./solutions-form.component.css']
})
export class SolutionsFormComponent {

    public solutionForm = this.typedFormBuilder.group(
        { } as Solution,
        {
            createdBy: false,
            creationDate: false,
            description: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
        },
        new SolutionValidator()
    )
    
    constructor(
        private solutionService: SolutionService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return this.solutionService.create.bind(this.solutionService)
    }

    get formGroup(): FormGroup {
        return this.solutionForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.solutionService.read.bind(this.solutionService)
    }

    get updateCallback() {
        return this.solutionService.update.bind(this.solutionService)
    }

}
