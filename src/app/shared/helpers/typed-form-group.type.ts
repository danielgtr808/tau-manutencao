import { AbstractControl, FormGroup } from "@angular/forms";

type TypedFormGroup<T> = Omit<FormGroup, "controls"> & { 
    controls: {[key in keyof T]: AbstractControl}
}

export default TypedFormGroup