import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import SelectAnswerConfiguration from './select-answer-configuration.type';
/**
 * Usado em formulários para criação de registros no lugar do elemento "select"
 */
@Component({
    selector: 'app-select-answer-field',
    templateUrl: './select-answer-field.component.html',
    styleUrls: ['./select-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SelectAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class SelectAnswerFieldComponent implements ControlValueAccessor {
    /**
     * Utilizado para acessar os erros associados a este campo. Através deste parâmetro, 
     * o campo também é marcado como "dirty" quando o evento "input" é emitido e como
     * "touched" na emição do evento "blur".
     */
    @Input() abstractControl: AbstractControl | undefined;
    /**
     * Texto para auxiliar o usuário a preencher o campo (como em caso de campos de telefone,
     * onde pode-se orientar o usuário a colocar o ddd ou não, por exemplo) ou para apresentar
     * uma mensagem relevante ao usuário (como por exemplo: Este campo não poderá ser editado).
     */
    @Input() helperText: string = "";
    /**
      * É o label que será associado ao campo.
      */
    @Input() label: string = "";
    /**
     * Determinar se o campo será somente leitura
     */
    @Input() readOnly: boolean = false;
    /**
     * Para saber sobre a utilização dessa propriedade, consulte a documentação do {@link SelectAnswerConfiguration}
     */
    @Input() selectAnswerConfiguration: SelectAnswerConfiguration<any> | undefined
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
     * No reactiveForms, é possível ouvir por mudanças nos valores nos elementos de um formulário, entretanto
     * quando um select ja começa de um valor, isso não é considerado uma mudança, e o não ocorre a notificação.
     * Caso alguma lógica seja executada após o valor do select deixar de ser nulo, basta escutar por este
     * evento ao inicializar o formulário para corrigir esse comportamento.
     */
    @Output() firstChange = new EventEmitter();
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
     * Em um select, pode existir uma diferença entre o que é exibido e o valor que a opção representa, através dessa
     * propriedade, é possível obter o valor exibido para ser usado fora de um select (quando o campo é somente leitura,
     * o valor é exibido em um span)
     */
    get displayValue(): any {
        if(!this.selectAnswerConfiguration) {
            return "";
        }

        for(let obj of this.selectAnswerConfiguration.data) {
            if(obj[this.selectAnswerConfiguration.idProperty] === this.value) {
                return obj[this.selectAnswerConfiguration.valueProperty];
            }
        }

        return "";
    }
    /**
     * Função usada para informar um formGroup que o estado do campo foi alterado para "dirty" e
     * informar algum listener que o valor do campo mudou.
     */
    onChange(event: Event): void {
        const selectValue = (event.target as HTMLSelectElement).value

        if(!this._onChangeFn) return;
        this._onChangeFn(selectValue);
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
     * Função necessária para a implementação da interface "ControlValueAcessor", existe um 
     * adicional da emissão do evento "firstChange". Para entender, basta ler a descrição do
     * evento "firstChange"
     */
    writeValue(obj: any): void {
        this.value = obj;
        this.firstChange.emit({
            target: {
                value: this.value
            }
        } as unknown as Event);
    }
}
