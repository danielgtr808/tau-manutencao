import { Component, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { FormGroup } from '@angular/forms';
import LoginPage from './login-page.model';
import LoginPageValidator from './login-page.validator';
import { LoginService } from '../../backend/login/login.service';
import { Router } from '@angular/router';
import { TypedFormBuilderService } from 'src/app/shared/typed-form-builder.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;

    checkingLogin: boolean = false;
    loginForm = this.typedFormBuilder.group(
        { } as LoginPage,
        { email: true, password: true },
        new LoginPageValidator()
    )
    
    constructor(
        private loginService: LoginService,
        private router: Router,
        private typedFormBuilder: TypedFormBuilderService
    ) {
        if(this.loginService.isAuthenticated) {
            this.router.navigateByUrl("/dashboard");
        }
    }

    get formGroup(): FormGroup {
        return this.loginForm as unknown as FormGroup;
    }

    login(): void {
        if(this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return
        }
        this.checkingLogin = true;
        // Para simular o tempo de resposta do backend, faz-se a chamada ao método de login
        // ser atrasado por 1,5 segundo.
        setTimeout(() => {
            const loginResult = this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            if(!loginResult.success) {                
                this.checkingLogin = false;
                this.errorMessageComponent?.showMessage(loginResult.errorMessage);
                return;
            }

            this.router.navigateByUrl("/dashboard");
        }, 1500);
    }

}
