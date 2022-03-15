import { AbstractControl } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import Cause from "./cause.model";

class CauseValidator implements Validator<Cause> {

    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {
        return null
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null
    }
    
    description(control: AbstractControl): ValidatorReturn<"description"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { description: "Necessário fornecer uma descrição" }
        }

        return null;
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

}

export default CauseValidator