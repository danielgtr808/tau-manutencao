import { AbstractControl } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import MachineFamily from "./machine-family.model";
import Result from "src/app/shared/helpers/result.type";

class MachineFamilyValidator implements Validator<MachineFamily> {

    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {
        return null
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null
    }

    id(control: AbstractControl): ValidatorReturn<"id"> {
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

    prefix(control: AbstractControl): ValidatorReturn<"prefix"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { prefix: "Necessário fornecer um prefixo" }
        }

        return null;
    }

}

export default MachineFamilyValidator