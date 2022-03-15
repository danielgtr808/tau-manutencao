import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeleteModalService {

    public showModal: boolean = false;
    public subscribeToAction = new Subject<"Cancel" | "Delete">();

    emitCancel(): void {
        this.showModal = false;
        this.subscribeToAction.next("Cancel");
    }

    emitDelete(): void {
        this.showModal = false;
        this.subscribeToAction.next("Delete");
    }

}
