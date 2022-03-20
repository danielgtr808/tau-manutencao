import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import Employee from 'src/app/backend/models/employees/employee.model';
import { EmployeeService } from 'src/app/backend/models/employees/employee.service';
import ServiceOrder from 'src/app/backend/models/service-order/service-order.model';
import { ServiceOrderService } from 'src/app/backend/models/service-order/service-order.service';
import ServiceOrderValidator from 'src/app/backend/models/service-order/service-order.validator';
import ServiceSolicitationStatus from 'src/app/backend/models/service-solicitation/service-solicitation-status.enum';
import Result from 'src/app/shared/helpers/result.type';
import RadioButtonOption from 'src/app/shared/radio-button-answer-field/radio-button-option.type';
import SelectAnswerConfiguration from 'src/app/shared/select-answer-field/select-answer-configuration.type';
import SummaryData from 'src/app/shared/summary-container/summary-data.type';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-service-order-form',
    templateUrl: './service-order-form.component.html',
    styleUrls: ['./service-order-form.component.css']
})
export class ServiceOrderFormComponent implements OnDestroy, OnInit {

    public serviceOrderForm = this.typedFormBuilder.group(
        { } as ServiceOrder,
        {
            baseSS: false,
            conclusion: true,
            createdBy: false,
            creationDate: false,
            id: false,
            isActive: false,
            lastEditedBy: false,
            lastEditionDate: false,
            reprovationReason: true,
            responsibleForMaintenance: true,
            serviceSolicitationId: false,
            status: true,
        },
        new ServiceOrderValidator(),
        [
            ServiceOrderValidator.cfv_checkIfReprovationReasonWasGiven,
            ServiceOrderValidator.cfv_checkIfResponsibleForMaintenanceWasGiven
        ]
    );

    public summaryData: SummaryData[] = [];
    public responsibleForMaintenanceIdSelectAnswerConfiguration: SelectAnswerConfiguration<Employee> = {
        data: this.employeeService.readAll(),
        determineDisplayProperty: "isActive",
        idProperty: "id",
        valueProperty: "name"
    }

    private _showReprovationReasonField: boolean = false;
    private _showConclusionFieldsReasonField: boolean = false;
    private _statusChangeSubscription: Subscription | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService,
        private router: Router,
        private serviceOrderService: ServiceOrderService,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        const idParam = this.activatedRoute.snapshot.params['id'] || "";
        if(idParam === "") {
            this.returnToDataPage();
            return;
        }

        const serviceOrderViewmodel = this.serviceOrderService.read(idParam);
        if(!serviceOrderViewmodel) {
            this.returnToDataPage();
            return;
        }

        this.summaryData = [
            {
                label: "Número da SS",
                value: serviceOrderViewmodel.serviceSolicitationId
            },
            {
                label: "Máquina",
                value: serviceOrderViewmodel.baseSS.machineName
            },
            {
                label: "TAG",
                value: serviceOrderViewmodel.baseSS.machineTag
            },
            {
                label: "Setor",
                value: serviceOrderViewmodel.baseSS.sectorName
            },
            {
                label: "Sintoma",
                value: serviceOrderViewmodel.baseSS.symptom
            },
            {
                label: "Tipo de OS",
                value: serviceOrderViewmodel.baseSS.serviceOrderType
            }
        ];
    }

    ngOnDestroy(): void {
        this._statusChangeSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        this._statusChangeSubscription = this.serviceOrderForm.controls.status.valueChanges.subscribe(value => {
            this._showReprovationReasonField = (value === "Reprovada");
            this._showConclusionFieldsReasonField = (value === "Aprovada");
        })
    }

    get createCallback() {
        return (model: ServiceOrder) => {
            return { result: undefined, success: true } as Result<undefined, string>
        }
    }

    get formGroup(): FormGroup {
        return this.serviceOrderForm as unknown as FormGroup;
    }

    get readFromIdCallback() {
        return this.serviceOrderService.read.bind(this.serviceOrderService)
    }

    get updateCallback() {
        return this.serviceOrderService.update.bind(this.serviceOrderService)
    }

    private returnToDataPage(): void {
        this.router.navigateByUrl('/services/service-order');
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

    get showReprovationReasonField(): boolean {
        return this._showReprovationReasonField;
    }

    get showConclusionFieldsReasonField(): boolean {
        return this._showConclusionFieldsReasonField;
    }
}
