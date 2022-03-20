import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Serviço usado para acessar a instância única do componente {@link DeleteModalComponent}.
 * A partir daqui, é possível de inscrever para ouvir a tomada de decisão realizada no
 * modal.
 */
@Injectable({
    providedIn: 'root'
})
export class DeleteModalService {
    /**
     * Propriedade que define se o modal deverá ser exibido ou não.
     */
    public showModal: boolean = false;
    /**
     * Obtém uma inscrição para ouvir o resultado da tomada de decisão no modal.
     */
    public subscribeToAction = new Subject<"Cancel" | "Delete">();
    /**
     * Função chamada quando o usuário cancela o processo de exclusão.
     */
    emitCancel(): void {
        this.showModal = false;
        this.subscribeToAction.next("Cancel");
    }
    /**
     * Função chamada quando o usuário confirma o processo de exclusão
     */
    emitDelete(): void {
        this.showModal = false;
        this.subscribeToAction.next("Delete");
    }

}
