import { Component, Input, OnInit } from '@angular/core';
import DataTableConfiguration from '../data-table/data-table-configuration.model';
/**
 * Usado como uma configuração padrão do componente {@link DataTableComponent}. É aplicado nas
 * páginas com o sufixo "-data".
 */
@Component({
    selector: 'app-crud-table',
    templateUrl: './crud-table.component.html',
    styleUrls: []
})
export class CrudTableComponent implements OnInit {
    /**
     * Caso a tabela esteja exibindo dados ao qual o usuário pode, através de um formulário,
     * criar um novo registro, o endereço para este formulário é fornecido neste parâmetro.
     */
    @Input() newRegisterLink: string = "";
    /**
     * Explicação sobre a configuração da tabela de dados é dada no componente {@link DataTableComponent}
     */
    @Input() dataTableConfiguration: DataTableConfiguration<any> | undefined;
    /**
     * Valida se os parâmetros de entrada necessários foram fornecidos. Caso não, busca
     * emitir uma mensagem de erro de fácil compreensão para que o manutentor saiba onde
     * está o problema.
     */
    ngOnInit(): void {
        if(!this.dataTableConfiguration) {
            console.error('É necessário fornecer o parâmetro de entrada "DataTableConfiguration".')
        }
    }
}
