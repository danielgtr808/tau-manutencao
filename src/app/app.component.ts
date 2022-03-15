import { Component } from '@angular/core';
import { DeleteModalService } from './shared/delete-modal/delete-modal.service';
import { StartingDataService } from './starting-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tau manutencao';

    constructor(
        public deleteModalService: DeleteModalService,
        private startinDataService: StartingDataService
    ) { }
}
