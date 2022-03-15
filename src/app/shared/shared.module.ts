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
import { DefaultDataPageComponent } from './default-data-page/default-data-page.component';
import { LongAnswerFieldComponent } from './long-answer-field/long-answer-field.component';
import { RadioButtonAnswerFieldComponent } from './radio-button-answer-field/radio-button-answer-field.component';
import { SummaryContainerComponent } from './summary-container/summary-container.component';
import { ResponsiveRowComponent } from './responsive-row/responsive-row.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
/**
 * Este módulo é utilizado para armazenar componentes, funções, tipos e serviços que não pertencem a nenhum móduglo
 * específico da aplicação. Os componentes e serviços são organizados em pastas, com os respectivos nomes dos componentes
 * e serviços, e as funções e tipos ficam localizados na pasta "helpers".
 */
@NgModule({
    declarations: [
        BorderedInputComponent,
        ContentContainerComponent,
        ContentTopMenuComponent,
        CrudTableComponent,
        DataTableComponent,
        DefaultDataPageComponent,
        DefaultFormPageComponent,
        ErrorMessageComponent,
        LogoComponent,
        LongAnswerFieldComponent,
        SelectAnswerFieldComponent,
        ShortAnswerFieldComponent,
        SideMenuComponent,
        SideMenuItemComponent,
        RadioButtonAnswerFieldComponent,
        SummaryContainerComponent,
        ResponsiveRowComponent,
        TopMenuComponent,
        DefaultPageComponent,
        DeleteModalComponent
    ],
    exports: [
        BorderedInputComponent,
        ContentContainerComponent,
        ContentTopMenuComponent,
        CrudTableComponent,
        DataTableComponent,
        DefaultDataPageComponent,
        DefaultFormPageComponent,
        ErrorMessageComponent,
        LogoComponent,
        LongAnswerFieldComponent,
        SelectAnswerFieldComponent,
        ShortAnswerFieldComponent,
        SideMenuComponent,
        SideMenuItemComponent,
        RadioButtonAnswerFieldComponent,
        SummaryContainerComponent,
        ResponsiveRowComponent,
        TopMenuComponent,
        DefaultPageComponent,
        DeleteModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule { }
