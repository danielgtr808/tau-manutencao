import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/backend/models/login/login.service';
/**
 * Exibe o menu lateral, que é responsável pela navegação principal (acesso aos módulos)
 */
@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
    /**
     * Quando o menu lateral está no modo mobile, este evento é emitido toda vez que o elemento
     * com a classe "collapse-button" é clicado.
     */
    @Output() closeAction = new EventEmitter();

    constructor(public loginService: LoginService) { }
    /**
     * Evento emitido quando o usuário clica no elemento de classe "collapse-button".
     */
    collapseButtonClick() {
        this.closeAction.emit()
    }
    /**
     * Faz chamada ao serviço {@link: LoginService} para realizar o logout do usuário.
     */
    logOut(): void {
        this.loginService.logOut();
        this.closeAction.emit();
    }
    /**
     * Quando em mobile, fecha o menu lateral após o usuário clicar em algum dos links
     * de navegação.
     */
    sideMenuClick() {
        this.closeAction.emit();
    }

}
