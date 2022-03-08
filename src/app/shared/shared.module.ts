import { BorderedInputComponent } from './bordered-input/bordered-input.component';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentTopMenuComponent } from './content-top-menu/content-top-menu.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { RouterModule } from '@angular/router';
import { ShortAnswerFieldComponent } from './short-answer-field/short-answer-field.component';
import { SelectAnswerFieldComponent } from './select-answer-field/select-answer-field.component';
import { DefaultFormPageComponent } from './default-form-page/default-form-page.component';

@NgModule({
    declarations: [
        BorderedInputComponent,
        ContentContainerComponent,
        ContentTopMenuComponent,
        CrudTableComponent,
        DataTableComponent,
        DefaultFormPageComponent,
        ErrorMessageComponent,
        LogoComponent,
        SelectAnswerFieldComponent,
        ShortAnswerFieldComponent,
        SideMenuComponent,
        SideMenuItemComponent
    ],
    exports: [
        BorderedInputComponent,
        ContentContainerComponent,
        ContentTopMenuComponent,
        CrudTableComponent,
        DataTableComponent,
        DefaultFormPageComponent,
        ErrorMessageComponent,
        LogoComponent,
        SelectAnswerFieldComponent,
        ShortAnswerFieldComponent,
        SideMenuComponent,
        SideMenuItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule { }
