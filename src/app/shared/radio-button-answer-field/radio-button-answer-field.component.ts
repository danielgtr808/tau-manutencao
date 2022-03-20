import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import RadioButtonOption from './radio-button-option.type';
/**
 * Usado em formulários para criação de registros no lugar do elemento "input" com o tipo "radio".
 */
@Component({
    selector: 'app-radio-button-answer-field',
    templateUrl: './radio-button-answer-field.component.html',
    styleUrls: ['./radio-button-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => RadioButtonAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class RadioButtonAnswerFieldComponent implements ControlValueAccessor {
    /**
     * Utilizado para acessar os erros associados a este campo. Através deste parâmetro, 
     * o campo também é marcado como "dirty" quando o evento "input" é emitido e como
     * "touched" na emição do evento "blur".
     */
    @Input() abstractControl: AbstractControl | undefined;
    /**
     * É o label que será associado ao campo.
     */
    @Input() label: string = "";
    /**
     * Determina quais elementos estarão presentes no radio button.
    */
    @Input() radioButtonOptions: RadioButtonOption[] = [];
    /**
     * Propriedade usada para saber quando aplicar a classe "on-focus", que altera a cor do label e da borda
     * do campo
     */
    onFocus: boolean = false;
    /**
     * Propriedade para fazer two-way data binding com o elemento input do componente.
     */
    value: string = "";
    /**
     * Propriedade usada na implementação da interface "ControlValueAcessor". Ela é chamada
     * toda vez que o evento "input" é emitido, desde que o campo esteja dentro de um formulário
     */
    private _onChangeFn: any | undefined;
     /**
      * Propriedade usada na implementação da interface "ControlValueAcessor". Ela é chamada
      * toda vez que os eventos "blur" e "focus" são emitido, desde que o campo esteja dentro
      * de um formulário
      */
    private _onTouchedFn: any | undefined;

    constructor() { }
    /**
     * Caso o parâmetro de entrada "abstractControl" tenha sido fornecido, e o campo esteja no
     * estado "touched", retorna a primeira mensagem de erro associada ao "abstractControl".
     */
     get error(): string {
        if(!this.abstractControl) return ""
        if(this.abstractControl.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in this.abstractControl.errors) {
            errorMessage = this.abstractControl.errors[errorCode];
            break;
        }

        return errorMessage;
    }
    /**
     * Função usada para informar um formGroup que o estado do campo foi alterado para "dirty" e
     * informar algum listener que o valor do campo mudou.
     */
     onChange(value: any): void {
        this.value = value;

        if(!this._onChangeFn) return;
        this._onChangeFn(value);
    }
    /**
     * Função usada para informar um formGroup que o estado do campo foi alterado para "touched"
     */
    onTouched(): void {
        if(!this._onTouchedFn) return;
        this._onTouchedFn();
    }
    /**
     * Função necessária para a implementação da interface "ControlValueAcessor"
     */
    registerOnChange(fn: any): void {
        this._onChangeFn = fn;
    }
    /**
     * Função necessária para a implementação da interface "ControlValueAcessor"
     */
    registerOnTouched(fn: any): void {
        this._onTouchedFn = fn;
    }
    /**
     * Função necessária para a implementação da interface "ControlValueAcessor"
     */
    writeValue(obj: any): void {
        this.value = obj;
    }

}
