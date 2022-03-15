import { Injectable } from '@angular/core';
import sortAscending from 'src/app/shared/helpers/sort-ascending.function';
import User from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public readonly storageKey = "users";

    constructor() { }

    private get users(): User[] {
        const usersString = localStorage.getItem(this.storageKey);
        if(usersString === null) {
            return [];
        }

        return JSON.parse(usersString);
    }

    readAll(): User[] {
        return sortAscending(
            this.users,
            "displayName"
        )
    }

}
