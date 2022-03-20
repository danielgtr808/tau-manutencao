import { Component, Input } from '@angular/core';
import DataTableConfiguration from '../data-table/data-table-configuration.model';
import SubPageLink from '../content-top-menu/sub-page-link.model';
/**
 * Utilizado para facilitar a criação de páginas de visualização de dados (páginas que se encontram
 * antes de um formulário, exibindo todos os registros ativos).
 */
@Component({
    selector: 'app-default-data-page',
    templateUrl: './default-data-page.component.html',
    styleUrls: ['./default-data-page.component.css']
})
export class DefaultDataPageComponent {
    /**
     * É a configuração da tabela que exibirá os dados dos registros ativos. Para saber mais
     * sobre, veja {@link DataTableComponent}
     */
    @Input() dataTableConfiguration: DataTableConfiguration<any> | undefined;
    /**
     * É o título principal (H1) que aparecerá no topo da página
     */
    @Input() moduleTitle: string = "";
    /**
     * Endereço para que o usuário possa criar um novo registro
     */
    @Input() newRegisterLink: string = "";
    /**
     * Navegação secundária da pagina, veja {@link ContentTopMenuComponent}
     */
    @Input() subPageLinks: SubPageLink[] = [];

    constructor() { }

}
