import { AbstractControl, FormGroup } from "@angular/forms";

/**
 * Tipo usado para substituir o "FormGroup" do módulo "ReactiveFormsModule",
 * permitindo que se use análize estática para saber quais propriedades
 * estão presentes em um grupo de formulário, baseado em um tipo genérico T.
 */
type TypedFormGroup<T> = Omit<FormGroup, "controls"> & { 
    controls: {[key in keyof T]: AbstractControl}
}

export default TypedFormGroup