import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * Usado em formulários para criação de registros no lugar do elemento "textArea"
 */
@Component({
    selector: 'app-long-answer-field',
    templateUrl: './long-answer-field.component.html',
    styleUrls: ['./long-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => LongAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class LongAnswerFieldComponent implements ControlValueAccessor {
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
     * Determinar se o campo será somente leitura
    */
    @Input() readOnly: boolean = false;
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
     * informar algum listener que o valor do campo mudou. Também atualiza a altura o textArea
     * baseado em quantas linhas foram preenchidas (evita ter que dar scroll após muitos dados
     * serem inseridos).
     */
     onChange(event: Event): void {
        const textArea = event.target as HTMLTextAreaElement;
        textArea.style.height = "auto";
        textArea.style.height = `${textArea.scrollHeight}px`;

        if(!this._onChangeFn) return;
        this._onChangeFn(textArea.value);
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
