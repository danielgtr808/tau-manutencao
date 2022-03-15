import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormGroup } from '@angular/forms';
import Result from '../helpers/result.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-default-form-page',
  templateUrl: './default-form-page.component.html',
  styleUrls: ['./default-form-page.component.css']
})
export class DefaultFormPageComponent implements OnInit {

    @Input() cancelUrl: string = "";
    @Input() createCallback: ((model: any) => Result<undefined, string>) | undefined
    @Input() createPageTitle: string = "";
    @Input() formGroup: FormGroup | undefined;
    @Input() updateCallback: ((model: any) => Result<undefined, string>) | undefined
    @Input() updatePageTitle: string = "";
    @Input() readFromIdCallback: ((id: any) => any) | undefined
    @Input() saveUrl: string = "";

    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
    
    private _idParam: string;
    private _pageTitle: string = "";

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this._idParam = this.activatedRoute.snapshot.params['id'] || "";
    }

    get pageTitle(): string {
        return this._pageTitle;
    }

    ngOnInit(): void {
        this._pageTitle = this.createPageTitle;
        if(this._idParam !== "new") {
            if(!this.updateCallback) {
                this.router.navigateByUrl(this.cancelUrl);
                return;
            }

            const numericIdParam = parseInt(this._idParam)
            const modelToUpdate = this.readFromIdCallback!(
                isNaN(numericIdParam) ? this._idParam : numericIdParam
            );
            if(!modelToUpdate) return;

            this.formGroup!.setValue(modelToUpdate);
            this._pageTitle = this.updatePageTitle
        }
    }

    saveChanges() {
        if(this.formGroup!.invalid) {
            this.formGroup!.markAllAsTouched();
            return;
        }

        const result = this._idParam === "new" ?
            this.createCallback!(this.formGroup!.value) :
            this.updateCallback!(this.formGroup!.value);
             
        if(!result.success) {
            this.showErrorMessage(result.errorMessage);
            return;
        }

        this.router.navigateByUrl(this.saveUrl);
    }

    showErrorMessage(errorMessage: string) {
        this.errorMessageComponent?.showMessage(errorMessage);
    }

}
