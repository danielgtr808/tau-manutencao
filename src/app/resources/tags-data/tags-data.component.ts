import { Component } from '@angular/core';
import Tag from 'src/app/backend/models/tags/tag.model';
import { TagService } from 'src/app/backend/models/tags/tag.service';
import SubPageLink from 'src/app/shared/content-top-menu/sub-page-link.model';
import DataTableConfiguration from 'src/app/shared/data-table/data-table-configuration.model';
import { subPageLinks } from '../resources.module';

@Component({
    selector: 'app-tags-data',
    templateUrl: './tags-data.component.html',
    styleUrls: ['./tags-data.component.css']
})
export class TagsDataComponent {

    public dataTableConfiguration: DataTableConfiguration<Tag>;
    public subPageLinks: SubPageLink[] = subPageLinks;

    constructor(private tagService: TagService) {
        this.dataTableConfiguration = {
            columnOrder: [
                { baseProperty: "id", displayName: "Tag", size: 'auto' },
                { baseProperty: "machineName", displayName: "Máquina", size: '1fr' }
            ],
            fetchData: () => {
                return this.tagService.readAllActive()
            },
            registersPerPage: 10
        }
    }

}
