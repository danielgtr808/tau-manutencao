import { Component, ElementRef } from '@angular/core';
/**
 * Usado para exibir mensagens de erro em formulários
 */
@Component({
    selector: 'app-error-message',    
    template: `
        <span class="message">{{message}}</span>
        <span class="close" (click)="this.close()" >X</span>
    `,
    styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
    /**
     * Mensagem de erro a ser exibida.
     */
    public message: string = "";
    /**
     * Faz referência a esse componente, é usado para mudar o valor do estilo "display"
     * entr "flex" (exibindo uma mensagem) e "none" (quando não existe nenhuma nova
     * mensagem)
     */
    private _elementRef: HTMLElement;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef.nativeElement;
        this.close();
    }
    /**
     * Usado para fechar a visualização da mensagem de erro.
     */
    close() {
        this._elementRef.style.display = "none";
    }
    /**
     * Usado para exibir uma mensagem de erro, caso ela seja diferente de uma string vazia.
     * @param message Mensagem de erro a ser exibida.
     */
    showMessage(message: string): void {
        if(message === "") return;
        this.message = message;
        this._elementRef.style.display = "flex";
    }

}
