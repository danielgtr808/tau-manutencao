import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
/**
 * Componente utilizado para a página de login e para filtrar dados em tabelas. Para formulários,
 * procure os componentes com o sufixo "-field".
 * 
 * Este componente foi projetado para ser usado com o módulo "ReactiveForms", para mais detalhes
 * de como utilizar, consulte a documentação dos parâmetros de entrada.
 */
@Component({
    selector: 'app-bordered-input',
    templateUrl: './bordered-input.component.html',
    styleUrls: ['./bordered-input.component.css'],
    providers: [     
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => BorderedInputComponent),
            multi: true     
        }   
    ]    
})
export class BorderedInputComponent implements ControlValueAccessor {
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
     * É o tipo do campo, pode ser qualquer valor valido para o atributo "type" da tag "input", como: email,
     * cellphone, search, etc...
     */
    @Input() type: string = "text";
    /**
     * Evento de saída usado quando o componente é aplicado para filtrar os dados de uma tabela, para poder
     * selecionar as informações baseando-se no valor do campo.
     */
    @Output() inputEvent = new EventEmitter<string>();
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
    onChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.inputEvent.emit(value);

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
