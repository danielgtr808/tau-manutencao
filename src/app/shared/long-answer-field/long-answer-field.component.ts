import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-long-answer-field',
    templateUrl: './long-answer-field.component.html',
    styleUrls: ['./long-answer-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => LongAnswerFieldComponent),
            multi: true     
        }
    ]
})
export class LongAnswerFieldComponent implements ControlValueAccessor {

    @Input() abstractControl: AbstractControl | undefined;
    @Input() formControlName: string | undefined;
    @Input() label: string = "";
    @Input() readOnly: boolean = false;

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
        const textArea = event.target as HTMLTextAreaElement;
        textArea.style.height = "auto";
        textArea.style.height = `${textArea.scrollHeight}px`;

        if(!this._onChangeFn) return;
        this._onChangeFn(textArea.value);
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
