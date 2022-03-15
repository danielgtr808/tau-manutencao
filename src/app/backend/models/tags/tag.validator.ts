import { AbstractControl } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import Tag from "./tag.model";

class TagValidator implements Validator<Tag> {

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

    machineId(control: AbstractControl): ValidatorReturn<"machineId"> {
        return null;
    }

    machineName(control: AbstractControl): ValidatorReturn<"machineName"> {
        const value: string = control.value;

        if(value.length === 0) {
            return { machineName: "Necessário escolher uma máquina" }
        }

        return null;
    }

}

export default TagValidator