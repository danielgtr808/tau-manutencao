import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymptomsDataComponent } from './symptoms-data/symptoms-data.component';
import { SymptomsFormComponent } from './symptoms-form/symptoms-form.component';
import { DefectsDataComponent } from './defects-data/defects-data.component';
import { DefectsFormComponent } from './defects-form/defects-form.component';
import { CausesDataComponent } from './causes-data/causes-data.component';
import { CausesFormComponent } from './causes-form/causes-form.component';
import { SolutionsFormComponent } from './solutions-form/solutions-form.component';
import { SolutionsDataComponent } from './solutions-data/solutions-data.component';
import SubPageLink from '../shared/content-top-menu/sub-page-link.model';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const interventionsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'symptoms'        
    },
    {
        component: SymptomsDataComponent,
        path: 'symptoms'
    },
    {
        component: SymptomsFormComponent,
        path: 'symptoms/:id'
    },
    {
        component: DefectsDataComponent,
        path: 'defects'
    },
    {
        component: DefectsFormComponent,
        path: 'defects/:id'
    },
    {
        component: CausesDataComponent,
        path: 'causes'
    },
    {
        component: CausesFormComponent,
        path: 'causes/:id'
    },
    {
        component: SolutionsDataComponent,
        path: 'solutions'
    },
    {
        component: SolutionsFormComponent,
        path: 'solutions/:id'
    }
];

export const subPageLinks: SubPageLink[] = [
    {
        label: 'Sintomas',
        routerLink: '/interventions/symptoms'
    },
    {
        label: 'Defeitos',
        routerLink: '/interventions/defects'
    },
    {
        label: 'Causas',
        routerLink: '/interventions/causes'
    },
    {
        label: 'Soluções',
        routerLink: '/interventions/solutions'
    }
]

@NgModule({
    declarations: [
        SymptomsDataComponent,
        SymptomsFormComponent,
        DefectsDataComponent,
        DefectsFormComponent,
        CausesDataComponent,
        CausesFormComponent,
        SolutionsFormComponent,
        SolutionsDataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(interventionsRoutes),
        SharedModule
    ]
})
export class InterventionsModule { }
