import { Component } from '@angular/core';
import { DeleteModalService } from './delete-modal.service';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

    constructor(private deleteModalService: DeleteModalService) { }

    onCancel(): void {
        this.deleteModalService.emitCancel();
    }

    onDelete(): void {
        this.deleteModalService.emitDelete();
    }
}
