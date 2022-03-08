import { AbstractControl } from "@angular/forms";
import LoginPage from "./login-page.model";
import Validator from "src/app/shared/helpers/validator.type";
import ValidatorReturn from "src/app/shared/helpers/validator-return.type";

class LoginPageValidator implements Validator<LoginPage> {

    email(control: AbstractControl): ValidatorReturn<"email"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { 'email': "É necessário fornecer um email." };
        }

        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }

        return null;
    }

    password(control: AbstractControl): ValidatorReturn<"password"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { 'password': "É necessário fornecer uma senha." }
        }

        return null;
    }

}

export default LoginPageValidator