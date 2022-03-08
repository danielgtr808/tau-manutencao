import { Injectable } from '@angular/core';
import SimpleObject from 'src/app/shared/helpers/simple-object.type';

@Injectable({
    providedIn: 'root'
})
export class IdTrackerService {

    constructor() { }

    getLastId(key: string): number {
        const keys = this.getKeysObject();
        if(!keys) return 1;

        const id: number = parseInt(keys[key] ?? 0);
        if(isNaN(id)) return 1;

        return id;
    }

    incrementId(key: string, increment: number = 1): void {
        const keys = this.getKeysObject();
        if(!keys) return;

        const id: number = parseInt(keys[key] ?? 0);
        if(isNaN(id)) return;

        keys[key] = id + increment;
        localStorage.setItem("keys", JSON.stringify(keys));
    }

    private getKeysObject(): SimpleObject | undefined {
        const keysString = localStorage.getItem("keys")
        if(keysString === null) return undefined;

        return JSON.parse(keysString);
    }
}
