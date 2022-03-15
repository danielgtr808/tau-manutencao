import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import RadioButtonOption from './radio-button-option.type';

@Component({
    selector: 'app-radio-button-answer-field',
    templateUrl: './radio-button-answer-field.component.html',
    styleUrls: ['./radio-button-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => RadioButtonAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class RadioButtonAnswerFieldComponent implements ControlValueAccessor {

    @Input() abstractControl: AbstractControl | undefined;
    @Input() formControlName: string | undefined;
    @Input() label: string = "";
    @Input() radioButtonOptions: RadioButtonOption[] = [];

    onFocus: boolean = false;
    value: string = "";

    @Output() onChangeEvent = new EventEmitter<any>();

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

    onChange(value: any): void {
        this.value = value;
        this.onChangeEvent.emit(value);

        if(!this._onChangeFn) return;
        this._onChangeFn(value);
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
