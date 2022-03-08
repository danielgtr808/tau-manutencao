import { AbstractControl } from "@angular/forms";
import ValidatorReturn from "./validator-return.type";

type Validator<T> = {
    [key in keyof T]: key extends number | string ? (control: AbstractControl) => ValidatorReturn<key> : never
}

export default Validator