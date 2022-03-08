import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-short-answer-field',
    templateUrl: './short-answer-field.component.html',
    styleUrls: ['./short-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => ShortAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class ShortAnswerFieldComponent implements ControlValueAccessor {
    
    @Input() abstractControl: AbstractControl | undefined;
    @Input() formControlName: string | undefined;
    @Input() label: string = "";
    @Input() readOnly: boolean = false;
    @Input() type: string = "text";

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
