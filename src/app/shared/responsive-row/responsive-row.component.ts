import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import ColumnOrder from '../data-table/column-order.type';
import SimpleObject from '../helpers/simple-object.type';
/**
 * Encapsula a lógica de responsividade das linhas de uma tabela (aplicação de atributos e classes) e de
 * marcação do checkbox das linhas.
 */
@Component({
    selector: 'app-responsive-row',
    templateUrl: './responsive-row.component.html',
    styleUrls: ['./responsive-row.component.css']
})
export class ResponsiveRowComponent implements AfterViewInit, OnChanges {
    /**
     * Faz referencia ao checkbox presente na primeira célula da linha. Através dele o estado
     * do checkbox é alterado para "checked", "indeterminate" e não checado (checked = false).
     * 
     * É feita uma alteração direta nas propriedades do elemento para evitar bugs visuais, visto que
     * algumas vezes a propriedade "checked" era alterada para "true", e a checagem não acontecia
     * no checkbox, ou para "false" e o checkbox não era desmarcado.
     */
    @ViewChild('checkbox') checkbox: ElementRef | undefined;
    /**
     * Propriedade que diz se o checkbox deve ser marcado ou não.
     */
    @Input() checked: boolean = false;
    /**
     * Descreve a ordem em que as propriedades devem ser exibidas na tabela.
     */
    @Input() columnOrder: ColumnOrder<any>[] = []
    /**
     * O objeto base que será usado para exibir os dados na linha
     */
    @Input() data: SimpleObject = { };
    /**
     * Diz se a linha deve conter um checkbox
     */
    @Input() hasCheckbox: boolean = false;
    /**
     * Endereço que leva o usuário a uma página outra página que, geralmente, exibe todas as
     * propriedades do objeto exibido na linha.
     * Case seja fornecida uma string vazia, a célula de redirecionamento não é exibida.
     */
    @Input() redirectLink: string = "";
    /**
     * Emitido toda vez que o checkbox da linha é marcado
     */
    @Output() checkEvent = new EventEmitter<SimpleObject>();
    /**
     * Emitido toda vez que o checkbox da linha é desmarcado
     */
    @Output() uncheckEvent = new EventEmitter<SimpleObject>();

    constructor() { }
    /**
     * Emitido toda vez que o usuário clica no checkbox, é feita a tomada
     * de decisão para saber qual evento emitir.
     */
    checkboxClick(): void {
        if(this.checked) {
            this.uncheckEvent.emit(this.data);
        }
        else {
            this.checkEvent.emit(this.data)
        }
    }
    /**
     * Atribui o parâmetro de entrada "checked" a propriedade "checked" do checkbox
     * da propriedade "checkbox".
     */
    ngAfterViewInit (): void {
        if(!this.checkbox) return;
        this.checkbox.nativeElement.checked = this.checked;
    }
    /**
     * Recebe todas as mudanças nos parâmetros de entrada. Conforme descrito na propriedade
     * "checkbox", é necessário alterar manualmente a propriedade "checked" do checkbox para
     * evitar bugs visuais.
     * @param changes Objeto que contêm todas as alterações realizadas nos parâmetros de entrada.
     */
    ngOnChanges(changes: SimpleChanges): void {
        if(!this.checkbox) return;
        this.checkbox.nativeElement.checked = changes["checked"].currentValue;
    }

}
