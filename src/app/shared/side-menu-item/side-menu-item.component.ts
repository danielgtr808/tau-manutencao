import { Component, Input } from '@angular/core';
/**
 * Usado para reduzir a quantidade de código HTML no componente {@link SideMenuComponent}, contém os SVGs
 * de todos os links do menu lateral, que são selecionados a partir do parâmetro de entrada "type"
 */
@Component({
    selector: 'app-side-menu-item',
    templateUrl: './side-menu-item.component.html',
    styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent {
    /**
     * Indica para qual endereço o usuário deve ser redirecionado após clicar no item. Também serve para estilizar
     * o componente com a classe "active"
     */
    @Input() routerLink: string = '';
    /**
     * Escolhe o ícone e o label do item
     */
    @Input() type: "Dashboard" | "Intervenções" | "Mão de obra" | "Recursos" | "Relatórios" |"Serviços" = "Dashboard"

    constructor() { }

}
