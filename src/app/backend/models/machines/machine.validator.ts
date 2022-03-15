import { AbstractControl } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import Machine from "./machine.model";

class MachineValidator implements Validator<Machine> {
    
    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {
        return null
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null
    }

    departmentName(control: AbstractControl): ValidatorReturn<"departmentName"> {
        const value: string = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { departmentName: "Necessário escolher um departamento" }
        }

        return null;
    }

    familyName(control: AbstractControl): ValidatorReturn<"familyName"> {
        const value: string = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { familyName: "Necessário escolher uma família de máquinas" }
        }

        return null;
    }

    familyPrefix(control: AbstractControl): ValidatorReturn<"familyPrefix"> {
        return null;
    }

    id(control: AbstractControl): ValidatorReturn<"id"> {
        return null
    }

    image(control: AbstractControl): ValidatorReturn<"image"> {
        return null
    }

    isActive(control: AbstractControl): ValidatorReturn<"isActive"> {
        return null
    }

    lastEditedBy(control: AbstractControl): ValidatorReturn<"lastEditedBy"> {
        return null
    }

    lastEditionDate(control: AbstractControl): ValidatorReturn<"lastEditionDate"> {
        return null
    }

    name(control: AbstractControl): ValidatorReturn<"name"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { name: "Necessário fornecer um nome" }
        }

        return null;
    }

}

export default MachineValidator