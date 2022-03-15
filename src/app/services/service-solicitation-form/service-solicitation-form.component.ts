import { Component, ViewChild } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Machine from 'src/app/backend/models/machines/machine.model';
import { MachineService } from 'src/app/backend/models/machines/machine.service';
import Sector from 'src/app/backend/models/sectors/sector.model';
import { SectorService } from 'src/app/backend/models/sectors/sector.service';
import ServiceOrderType from 'src/app/backend/models/service-order/service-order-type.enum';
import ServiceSolicitationStatus from 'src/app/backend/models/service-solicitation/service-solicitation-status.enum';
import ServiceSolicitation from 'src/app/backend/models/service-solicitation/service-solicitation.model';
import { ServiceSolicitationService } from 'src/app/backend/models/service-solicitation/service-solicitation.service';
import ServiceSolicitationValidator from 'src/app/backend/models/service-solicitation/service-solicitation.validator';
import Symptom from 'src/app/backend/models/symptoms/symptom.model';
import { SymptomService } from 'src/app/backend/models/symptoms/symptom.service';
import Tag from 'src/app/backend/models/tags/tag.model';
import { TagService } from 'src/app/backend/models/tags/tag.service';
import { DefaultFormPageComponent } from 'src/app/shared/default-form-page/default-form-page.component';
import RadioButtonOption from 'src/app/shared/radio-button-answer-field/radio-button-option.type';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-service-solicitation-form',
    templateUrl: './service-solicitation-form.component.html',
    styleUrls: ['./service-solicitation-form.component.css']
})
export class ServiceSolicitationFormComponent {


    @ViewChild(DefaultFormPageComponent) defaultFormPageComponent: DefaultFormPageComponent | undefined;

    public readonly isUpdate: boolean;

    public machineSelectAnswerConfiguration: SelectAnswerConfiguration<Machine> = {
        data: this.machineService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    }

    public sectorSelectAnswerConfiguration: SelectAnswerConfiguration<Sector> = {
        data: this.sectorService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "name",
        valueProperty: "name"
    }

    public serviceSolicitationForm = this.typedFormBuilder.group(
        { } as ServiceSolicitation,
        {
            createdBy: false,
            creationDate: false,
            description: true,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            machineName: true,
            machineTag: true,
            reprovationReason: true,
            sectorName: true,
            serviceOrderType: true,
            status: true,
            symptom: true
        },
        new ServiceSolicitationValidator(),
        [ServiceSolicitationValidator.cfv_checkIfReprovationReasonWasGiven]
    );

    public symptomSelectAnswerConfiguration: SelectAnswerConfiguration<Symptom> = {
        data: this.symptomService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "description",
        valueProperty: "description"
    }

    public tagSelectAnswerConfiguration: SelectAnswerConfiguration<Tag> = {
        data: [],
        determineDisplayProperty: "isActive",
        idProperty: "id",
        valueProperty: "id"
    }

    private _showMachineTagField: boolean = false;
    private _showSectorNameField: boolean = false;
    private _showSymptomField: boolean = false;
    private _showOsTypeField: boolean = false;
    private _showDescriptionField: boolean = false;
    private _showReprovationReasonField: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private machineService: MachineService,
        private sectorService: SectorService,
        private serviceSolicitationService: ServiceSolicitationService,
        private symptomService: SymptomService,
        private tagService: TagService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        this.isUpdate = (this.activatedRoute.snapshot.params['id'] || "") !== "new";
    }

    get createCallback() {
        return this.serviceSolicitationService.create.bind(this.serviceSolicitationService)
    }

    get formGroup(): FormGroup {
        return this.serviceSolicitationForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.serviceSolicitationService.read.bind(this.serviceSolicitationService)
    }

    get updateCallback() {
        return this.serviceSolicitationService.update.bind(this.serviceSolicitationService)
    }

    onMachineNameChange(target: EventTarget): void {
        this.tagSelectAnswerConfiguration.data = this.tagService.readAll().filter(x => 
            x.machineName === (target as HTMLSelectElement).value
        );

        this._showMachineTagField = true;
        if(this.tagSelectAnswerConfiguration.data.length === 0) {
            this._showMachineTagField = false;
            this.showErrorMessage("Nenhuma tag encontrada para essa máquina. Gere uma tag antes de continuar com a criação de uma solicitação de serviço.")
        }
    }

    get showMachineTagField(): boolean {
        return this._showMachineTagField;
    }

    onMachineTagChange(target: EventTarget): void {
        if((target as HTMLSelectElement).value === "") return

        const machine = this.machineSelectAnswerConfiguration.data.find(x => 
            x.name === this.serviceSolicitationForm.controls.machineName.value
        )!;

        this.sectorSelectAnswerConfiguration.data = this.sectorService.readAll().filter(x => 
            x.departmentName === machine.departmentName
        );

        // Para corrigir o problema "NG0100" ao editar uma solicitação de serviço.
        setTimeout(() => {
            this._showSectorNameField = true;
        }, 0);
    }

    get showSectorNameField(): boolean {
        return this._showSectorNameField;
    }

    onSectorNameChange(target: EventTarget): void {     
        if((target as HTMLSelectElement).value === "") return
           
        // Para corrigir o problema "NG0100" ao editar uma solicitação de serviço.
        setTimeout(() => {
            this._showSymptomField = true;
            this._showOsTypeField = true;
            this._showDescriptionField = true;
        }, 0);
    }

    get showSymptomField(): boolean {
        return this._showSymptomField;
    }
    
    get showOsTypeField(): boolean {
        return this._showOsTypeField;
    }

    get serviceOrderTypeRadioButton(): RadioButtonOption[] {
        const options: RadioButtonOption[] = [];

        for(let option of Object.keys(ServiceOrderType)) {
            options.push({
                label: option,
                value: option
            });
        }

        return options;
    }

    get showDescriptionField(): boolean {
        return this._showDescriptionField;
    }

    get statusRadioButton(): RadioButtonOption[] {
        const options: RadioButtonOption[] = [];

        for(let option of Object.keys(ServiceSolicitationStatus)) {
            options.push({
                label: option,
                value: option
            });
        }

        return options;
    }

    onStatusChange(value: any): void {
        this._showReprovationReasonField = (value === "Reprovada");
    }

    get showReprovationReasonField(): boolean {
        return this._showReprovationReasonField;
    }

    showErrorMessage(errorMessage: string): void {
        this.defaultFormPageComponent?.showErrorMessage(errorMessage);
    }
    
}
