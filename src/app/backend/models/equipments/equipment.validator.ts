import { AbstractControl } from "@angular/forms";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";
import Equipment from "./equipment.model";

class EquipmentValidator implements Validator<Equipment> {

    createdBy(control: AbstractControl): ValidatorReturn<"createdBy"> {
        return null
    }

    creationDate(control: AbstractControl): ValidatorReturn<"creationDate"> {
        return null
    }

    machineName(control: AbstractControl): ValidatorReturn<"machineName"> {
        const value: string = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { machineName: "Necessário escolher uma máquina" }
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

    name(control: AbstractControl): ValidatorReturn<"name"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { name: "Necessário fornecer um nome" }
        }

        return null;
    }

}

export default EquipmentValidator