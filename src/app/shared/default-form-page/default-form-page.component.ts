import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormGroup } from '@angular/forms';
import Result from '../helpers/result.type';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Utilizado para facilitar a criação de páginas de formulários (criação e edição de registros). Para utilizar
 * esse componente, utilize elementos de formulário (input, select, textarea...) ou componentes que implementem
 * a interface ControValueAcessor. Exemplo:
 * <app-default-form-page>
 *      <input formControlName="example" />
 *      <select formControlName-"example2" ><option...</select>
 * </app-default-form-page>
 * 
 * O componente faz uso de reactive forms, portanto, é importante que todos os elementos inseridos dentro de 
 * "app-default-form-page" tenham o atributo "formControlName"
 */
@Component({
    selector: 'app-default-form-page',
    templateUrl: './default-form-page.component.html',
    styleUrls: ['./default-form-page.component.css']
})
export class DefaultFormPageComponent implements OnInit {
    /**
     * Caso o usuário queira cancelar a criação/edição do registro, ele será redirecionado para 
     * este enderçeo.
     */
    @Input() cancelUrl: string = "";
    /**
     * Qual função deverá ser chamada quando o usuário clicar no botão "Criar registro"
     */
    @Input() createCallback: ((model: any) => Result<undefined, string>) | undefined
    /**
     * Qual deve ser o título principal da página (H1) quando o usuário estiver criando
     * um novo registro.
     */
    @Input() createPageTitle: string = "";
    /**
     * O componente trabalha injetando elementos que possuem ligação com um formulário 
     * reativo (ReactiveForms), ou seja, precisam estar dentro de uma tag "form" que
     * possua um atributo do formGroup que as contêm. Essa formgroup é fornecido por esse
     * parâmetro.
     */
    @Input() formGroup: FormGroup | undefined;
    /**
     * Qual função deverá ser chamada quando o usuário clicar no botão "Criar registro"
     */
    @Input() updateCallback: ((model: any) => Result<undefined, string>) | undefined
    /**
     * Qual deve ser o título principal da página (H1) quando o usuário estiver editando
     * um novo registro.
     */
    @Input() updatePageTitle: string = "";
    /**
     * Qual função deverá ser chamada quando o usuário clicar no botão "Atualizar registro"
     */
    @Input() readFromIdCallback: ((id: any) => any) | undefined
    /**
     * Para onde o usuário deverá ser redirecionado quando salvar/editar um registro.
     */
    @Input() saveUrl: string = "";
    /**
     * Referência ao componente "ErrorMessage", que é usado para exibir mensagens de erro
     * que não são específicas a um único campo do formulário.
     */
    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
    /**
     * Variável que armazena o valor do parâmetro "id", presente na url.
     */
    private _idParam: string;
    /**
     * Após decidir se um novo registro será criado ou se será atualizado, baseando-se no valor
     * do parâmetro "id", o título de página escolhido será atribuído a essa variável.
     */
    private _pageTitle: string = "";

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this._idParam = this.activatedRoute.snapshot.params['id'] || "";
    }

    get pageTitle(): string {
        return this._pageTitle;
    }
    /**
     * Após a inicialização do componente, verifica-se se o usuário esta tentando criar
     * ou atualizar um registro através do parâmetro do rota "id".
     */
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
    /**
     * Chamada quando o usuário tenta criar ou atualizar um registro. Faz a verificação
     * se não existe nenhum erro no formulário,caso não, continua o processo baseando-se
     * nos callbacks "createCallback" e "updateCallback".
     * @returns 
     */
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
    /**
     * Exibe uma mensagem de erro através do compomnente {@link ErrorMessageComponent}.
     * @param errorMessage Mensagem de erro a ser exibida.
     */
    showErrorMessage(errorMessage: string) {
        this.errorMessageComponent?.showMessage(errorMessage);
    }

}
