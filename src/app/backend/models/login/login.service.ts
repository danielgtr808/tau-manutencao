import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Result from 'src/app/shared/helpers/result.type';
import LoginErrors from './login-errors.result';
import User from '../users/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    user: undefined | User;

    constructor(private router: Router) {
        const currentUser = localStorage.getItem("current-user");
        if(currentUser === null) return

        if(currentUser !== '') {
            this.user = JSON.parse(currentUser);
        }
    }

    get isAuthenticated(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Result<undefined, LoginErrors> {
        const users: User[] = JSON.parse(localStorage.getItem("users") ?? "");

        const userWithSameEmail = users.find(x => x.email === email);
        if(userWithSameEmail === undefined) {
            return { success: false, errorMessage: "Usuário não existe" }
        }
        
        if(userWithSameEmail.password !== password) {
            return { success: false, errorMessage: "Login ou senha incorretos" }
        }

        this.user = userWithSameEmail;
        localStorage.setItem("current-user", JSON.stringify(this.user));
        return { success: true, result: undefined }
    }

    logOut() {
        this.user = undefined;
        localStorage.setItem("current-user", '');
        this.router.navigateByUrl('');
    }

}
