import { Component, Input } from '@angular/core';
/**
 * Usado para destacar e encapsular conteúdos, tornando explicito onde ele começa e termina.
 * É recomendado que seja usado em todos elementos que não façam parte do título ou navegação
 * de uma página.
 */
@Component({
    selector: 'app-content-container',
    template: `
        <h3 *ngIf="this.title !== ''">{{this.title}}</h3>
        <ng-content></ng-content>
    `,
    styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent {
    /**
     * É o título que o container receberá. A tag utilizada será a H3.
     */
    @Input() title: string = "";
}
