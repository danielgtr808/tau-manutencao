import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { never } from 'rxjs';
import TypedFormGroup from './helpers/typed-form-group.type';
import ValidatorReturn from './helpers/validator-return.type';
import Validator from './helpers/validator.type';

type NonUndefinedProperties<T> = {[key in keyof T]: T[key] extends false ? never : key}[keyof T];

type RemoveUndefinedProperties<T> = {[key in NonUndefinedProperties<T>]: T[key]}

@Injectable({
    providedIn: 'root'
})
export class TypedFormBuilderService {

    constructor(private formBuilder: FormBuilder) { }

    group<
        T,
        U extends {[key in keyof T]: false | true},
        V extends Validator<RemoveUndefinedProperties<U>>
    > (type: T, selected: U, fieldValidators?: V, crossFieldValidators: ValidatorFn[] = []): TypedFormGroup<RemoveUndefinedProperties<U>> {
        const abstractControls: {[key: string]: AbstractControl } = { };

        for(const property of Object.keys(selected)) {
            abstractControls[property] = new FormControl(
                '',
                // @ts-ignore
                fieldValidators ? fieldValidators[property] : []
            );
        }

        return this.formBuilder.group({...abstractControls}, { validators: crossFieldValidators }) as any;
    }
}