import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import SelectAnswerConfiguration from './select-answer-configuration.type';

@Component({
    selector: 'app-select-answer-field',
    templateUrl: './select-answer-field.component.html',
    styleUrls: ['./select-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SelectAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class SelectAnswerFieldComponent implements ControlValueAccessor {

    @Input() abstractControl: AbstractControl | undefined;
    @Input() formControlName: string | undefined;
    @Input() label: string = "";
    @Input() selectAnswerConfiguration: SelectAnswerConfiguration<any> | undefined

    onFocus: boolean = false;
    value: string = "";

    private _onChangeFn: any | undefined;
    private _onTouchedFn: any | undefined;

    constructor() { }

    get error(): string {
        if(!this.abstractControl) return ""
        if(this.abstractControl.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in this.abstractControl.errors) {
            errorMessage = this.abstractControl.errors[errorCode];
            break;
        }

        return errorMessage;
    }

    onChange(event: Event): void {
        if(!this._onChangeFn) return;
        this._onChangeFn(
            (event.target as HTMLInputElement).value
        );
    }

    onTouched(): void {
        if(!this._onTouchedFn) return;
        this._onTouchedFn();
    }

    registerOnChange(fn: any): void {
        this._onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouchedFn = fn;
    }

    writeValue(obj: any): void {
        this.value = obj;
    }
}