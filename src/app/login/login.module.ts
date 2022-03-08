import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const loginRoutes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    }
]

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    exports: [
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(loginRoutes),
        SharedModule
    ]
})
export class LoginModule { }
