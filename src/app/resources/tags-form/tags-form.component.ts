import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Machine from 'src/app/backend/models/machines/machine.model';
import { MachineService } from 'src/app/backend/models/machines/machine.service';
import Tag from 'src/app/backend/models/tags/tag.model';
import { TagService } from 'src/app/backend/models/tags/tag.service';
import TagValidator from 'src/app/backend/models/tags/tag.validator';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-tags-form',
    templateUrl: './tags-form.component.html',
    styleUrls: ['./tags-form.component.css']
})
export class TagsFormComponent {

    public tagForm = this.typedFormBuilder.group(
        { } as Tag,
        {
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            machineName: true,
            machineId: false
        },
        new TagValidator()
    );

    public machineSelectAnswerConfiguration: SelectAnswerConfiguration<Machine> = {
        data: this.machineService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    };

    constructor(
        private machineService: MachineService,
        private tagService: TagService,
        private typedFormBuilder: TypedFormBuilderService
    ) { }

    get createCallback() {
        return (model: Tag) => {
            model.machineId = this.machineSelectAnswerConfiguration.data.find(x => x.name === model.machineName)!.id;
            return this.tagService.create(model);
        }
    }

    get formGroup(): FormGroup {
        return this.tagForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.tagService.read.bind(this.tagService)
    }

    get updateCallback() {
        return this.tagService.update.bind(this.tagService)
    }

}
