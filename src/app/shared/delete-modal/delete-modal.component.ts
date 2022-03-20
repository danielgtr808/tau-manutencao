import { Component } from '@angular/core';
import { DeleteModalService } from './delete-modal.service';
/**
 * Modal com texto pedindo para o usuário confirmar a solicitação de exclusão de registros.
 * Possui um callback para cada decisão tomada.
 */
@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

    constructor(private deleteModalService: DeleteModalService) { }
    /**
     * Callback chamado quando o usuário desiste de realizar a operação de exclusão e clica em
     * "cancelar"
     */
    onCancel(): void {
        this.deleteModalService.emitCancel();
    }
    /**
     * Callback chamado quando o usuário confirma a operação de exclusão e clica em "Excluir registro"
     */
    onDelete(): void {
        this.deleteModalService.emitDelete();
    }
}
