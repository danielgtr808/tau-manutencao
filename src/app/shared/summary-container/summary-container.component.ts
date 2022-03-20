import { Component, Input } from '@angular/core';
import SummaryData from './summary-data.type';
/**
 * Usado para exibir um resumo de informações ou uma série de campos somente leitura em um formulário, exemplo:
 * 
 * Na página de ordem de serviço (service-order-form), existe um resumo da solicitação de serviço que deu origem
 * a OS.
 */
@Component({
    selector: 'app-summary-container',
    templateUrl: './summary-container.component.html',
    styleUrls: ['./summary-container.component.css']
})
export class SummaryContainerComponent {
    /**
     * Dados que serão exibidos dentro do container.
     */
    @Input() summaryData: SummaryData[] = [];
    /**
     * Título (H3) do container.
     */
    @Input() title: string = "";

    constructor() { }

}
