import { Component, Input } from '@angular/core';
/**
 * Como o componente é necessário em diferentes partes da aplicação, usa-se este
 * componoente para re-utilizar o svg do logo.
 */
@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: []
})
export class LogoComponent {
    /**
     * Determina o tamanho do logo
     */
    @Input() size: "large" | "small" = "large"

}
