import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import ServiceOrder from "./service-order.model";

class ServiceOrderValidator implements Validator<ServiceOrder> {

    baseSS(control: AbstractControl): ValidatorReturn<"baseSS"> {
        return null;
    };

    conclusion(control: AbstractControl): ValidatorReturn<"conclusion"> {    
        return null;
    }

    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {    
        return null;
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null;
    }

    id(control: AbstractControl): ValidatorReturn<"id"> {
        return null;
    }

    isActive(control: AbstractControl): ValidatorReturn<"isActive"> {
        return null;
    }

    lastEditedBy(control: AbstractControl): ValidatorReturn<"lastEditedBy"> {
        return null;
    }

    lastEditionDate(control: AbstractControl): ValidatorReturn<"lastEditionDate"> {
        return null;
    }

    responsibleForMaintenance(control: AbstractControl): ValidatorReturn<"responsibleForMaintenance"> {
        return null;
    }

    reprovationReason(control: AbstractControl): ValidatorReturn<"reprovationReason"> {
        return null;
    }

    serviceSolicitationId(control: AbstractControl): ValidatorReturn<"serviceSolicitationId"> {
        return null;
    }

    status(control: AbstractControl): ValidatorReturn<"status"> {
        return null;
    }

    static cfv_checkIfReprovationReasonWasGiven(control: AbstractControl): ValidationErrors | null {
        const status = control.get('status');
        const reprovationReason = control.get('reprovationReason');

        if((status?.value ?? "") === 'Reprovada' && 
            `${(reprovationReason?.value ?? "")}`.trim() === ""
        ) {
            reprovationReason?.setErrors({
                reprovationReason: "É necessário fornecer um motivo para a reprovação"
            });
        }
        else {
            reprovationReason?.setErrors(null);
        }

        return null
    };

    static cfv_checkIfResponsibleForMaintenanceWasGiven(control: AbstractControl): ValidationErrors | null {
        const status = control.get('status');
        const reprovationReason = control.get('responsibleForMaintenance');

        if((status?.value ?? "") === 'Aprovada' && 
            `${(reprovationReason?.value ?? "")}`.trim() === ""
        ) {
            reprovationReason?.setErrors({
                responsibleForMaintenanceId: "É necessário fornecer um responsável pela manutenção"
            });
        }
        else {
            reprovationReason?.setErrors(null);
        }

        return null
    };
}

export default ServiceOrderValidator