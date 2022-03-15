import { Component, Input } from '@angular/core';
import SubPageLink from './sub-page-link.model';
/**
 * Usado para exibir o título de uma página e na navegação das subpaginas de módulo.
 */
@Component({
    selector: 'app-content-top-menu',
    templateUrl: './content-top-menu.component.html',
    styleUrls: ['./content-top-menu.component.css']
})
export class ContentTopMenuComponent {
    /**
     * É o título (tag H1) da página.
     * @todo change "moduleTitle" to "pageTitle"
     */
    @Input() moduleTitle: string = "";
    /**
     * São os endereços que ficam na horizontal, abaixo do título da página. Representam
     * o segundo nível de navegação dentro de um módulo. 
     */
    @Input() subPageLinks: SubPageLink[] = [];
}
