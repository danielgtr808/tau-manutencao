import { Component } from '@angular/core';
/**
 * Menu exibido na versão mobile do layout, serve como versão minimizada do menu lateral.
 */
@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
    /**
     * Determina se o side menu ({@link SideMenuComponent}) deve ser exibido ou não
     */
    public showSideMenu: boolean = false;
    /**
     * Resultado da emissão do evento "closeAction" do menu lateral ({@link SideMenuComponent})
     */
    hideSidemenu() {
        this.showSideMenu = false;
    }

}
