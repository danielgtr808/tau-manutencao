import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-error-message',    
    template: `
        <span class="message">{{message}}</span>
        <span class="close" (click)="this.close()" >X</span>
    `,
    styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

    public message: string = "";

    private _elementRef: HTMLElement;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef.nativeElement;
        this.close();
    }

    close() {
        this._elementRef.style.display = "none";
    }

    showMessage(message: string): void {
        if(message === "") return;
        this.message = message;
        this._elementRef.style.display = "flex";
    }

}
