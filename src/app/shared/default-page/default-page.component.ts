import { Component, Input } from '@angular/core';
import SubPageLink from '../content-top-menu/sub-page-link.model';
/**
 * Contém a estrutura html básica que toda página, desta aplicação, deve ter
 * para ser responsiva
 */
@Component({
    selector: 'app-default-page',
    templateUrl: './default-page.component.html',
    styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {
    /**
     * É o título principal (H1) que aparecerá no topo da página
     */
    @Input() moduleTitle: string = "";
    /**
     * Navegação secundária da pagina, veja {@link ContentTopMenuComponent}
     */
    @Input() subPageLinks: SubPageLink[] = [];

    constructor() { }

}
