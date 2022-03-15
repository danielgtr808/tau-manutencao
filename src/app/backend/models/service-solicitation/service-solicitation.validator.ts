import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import ServiceSolicitation from "./service-solicitation.model";

class ServiceSolicitationValidator implements Validator<ServiceSolicitation> {

    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {    
        return null;
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null;
    }

    description(control: AbstractControl): ValidatorReturn<"description"> {
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

    machineName(control: AbstractControl): ValidatorReturn<"machineName"> {
        const value: string = `${control.value ?? ""}`;
    
        if(value.length === 0) {
            return { machineName: "É necessário escolher uma máquina." }
        }

        return null;
    }

    machineTag(control: AbstractControl): ValidatorReturn<"machineTag"> {
        const value: string = `${control.value ?? ""}`;
    
        if(value.length === 0) {
            return { machineTag: "É necessário escolher uma tag." }
        }

        return null;
    }

    reprovationReason(control: AbstractControl): ValidatorReturn<"reprovationReason"> {    
        return null;
    }

    serviceOrderType(control: AbstractControl): ValidatorReturn<"serviceOrderType"> {    
        const value: string = `${control.value ?? ""}`;
    
        if(value.length === 0) {
            return { serviceOrderType: "É necessário escolher um tipo de ordem de serviço." }
        }

        return null;
    }

    sectorName(control: AbstractControl): ValidatorReturn<"sectorName"> {    
        return null;
    }

    status(control: AbstractControl): ValidatorReturn<"status"> {    
        return null;
    }

    symptom(control: AbstractControl): ValidatorReturn<"symptom"> {
        const value: string = `${control.value ?? ""}`;
    
        if(value.length === 0) {
            return { symptom: "É necessário escolher um sintoma." }
        }

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
            })
        }
        else {
            reprovationReason?.setErrors(null);
        }

        return null
    };

}

export default ServiceSolicitationValidator