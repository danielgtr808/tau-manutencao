import { AbstractControl } from "@angular/forms";
import RemoveSymbol from "./remove-symbol.type";
import ValidatorReturn from "./validator-return.type";

/**
 * Cada propriedade do {@link: TypedFormGroup} pode possuir um validador (máximo/mínimo número de caracteres,
 * campo necessário, etc...), esse tipo ajuda a criar uma classe em que é necessário escrever um validador
 * para cada propriedade de um objeto genérico do tipo "T", para ser associado a um TypedFormGroup.
 */
type Validator<T> = {
    [key in RemoveSymbol<T>]: (control: AbstractControl) => ValidatorReturn<key>
}

export default Validator