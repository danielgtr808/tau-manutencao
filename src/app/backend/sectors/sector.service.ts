import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import { FillUserDataService } from '../fill-user-data/fill-user-data.service';
import { IdTrackerService } from '../id-tracker/id-tracker.service';
import Sector from './sector.model';

@Injectable({
    providedIn: 'root'
})
export class SectorService {

    constructor(
        private fillUserDataService: FillUserDataService,
        private idTrackerService: IdTrackerService
    ) { }

    private get sectors(): Sector[] {
        const sectorsString = localStorage.getItem("sectors");
        if(sectorsString === null) {
            return [];
        }

        return JSON.parse(sectorsString);
    }

    private set sectors(models: Sector[]) {
        localStorage.setItem("sectors", JSON.stringify(models));
    }

    create(model: Sector): Result<undefined, string> {
        this.fillUserDataService.fillNewRegistry(model);
        model.departmentId = parseInt(`${model.departmentId}`);
        model.id = this.idTrackerService.getLastId("sectors") + 1;
        model.isActive = true;

        const sectors: Sector[] = this.sectors;

        const validationResult = this.validate(sectors, model);
        if(!validationResult.success) return validationResult;

        sectors.push(model);

        this.idTrackerService.incrementId("sectors");
        this.sectors = sectors;

        return validationResult
    }

    read(id: number): Sector | undefined {
        return this.sectors.find(x => x.id === id);
    }

    readAllActive(): Sector[] {
        return sortAscending(
            this.sectors.filter(x => x.isActive === true),
            "name"
        );
    }

    update(model: Sector): Result<undefined, string> {
        this.fillUserDataService.fillUpdatedRegistry(model);
        model.departmentId = parseInt(`${model.departmentId}`);

        const sectors = this.sectors;
        sectors.splice(sectors.findIndex(x => x.id === model.id) , 1);

        const validationResult = this.validate(sectors, model);
        if(!validationResult.success) return validationResult;

        sectors.push(model);
        this.sectors = sectors;

        return validationResult;
    }

    private validate(oldModels: Sector[], newModel: Sector): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase() && x.departmentId === newModel.departmentId)) {
            return { errorMessage: `Já existe um setor, para o departamento escolhido, com esse nome.`, success: false };
        }

        return { result: undefined, success: true }
    }

}
