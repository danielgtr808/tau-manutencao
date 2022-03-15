import { DefaultBehaviorService } from '../../default-behavior/default-behavior.service';
import { Injectable } from '@angular/core';
import Result from 'src/app/shared/helpers/result.type';
import Sector from './sector.model';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';

@Injectable({
    providedIn: 'root'
})
export class SectorService {

    public readonly storageKey = "sectors";

    constructor(private defaultBehaviorService: DefaultBehaviorService) { }

    private get sectors(): Sector[] {
        const sectorsString = localStorage.getItem(this.storageKey);
        if(sectorsString === null) {
            return [];
        }

        return JSON.parse(sectorsString);
    }

    create(model: Sector): Result<undefined, string> {
        return this.defaultBehaviorService.create(
            model,
            this.validate.bind(this),
            this.storageKey
        )
    }

    delete(model: Sector): void {
        this.defaultBehaviorService.delete(model, this.storageKey);
    }

    read(id: number): Sector | undefined {
        return this.sectors.find(x => x.id === id);
    }

    readAll(): Sector[] {
        return sortAscending(this.sectors,"name");
    }

    readAllActive(): Sector[] {
        return sortAscending(
            this.sectors.filter(x => x.isActive === true),
            "name"
        );
    }

    update(model: Sector): Result<undefined, string> {
        return this.defaultBehaviorService.update(
            model,
            this.validate.bind(this),
            this.storageKey
        );
    }

    private validate(newModel: Sector, oldModels: Sector[]): Result<undefined, string> {
        if(oldModels.find(x => x.name.toLowerCase() === newModel.name.toLowerCase() && x.departmentName === newModel.departmentName)) {
            return { errorMessage: `Já existe um setor, para o departamento escolhido, com esse nome.`, success: false };
        }

        return { result: undefined, success: true }
    }

}
