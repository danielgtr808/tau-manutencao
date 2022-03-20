import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import DataTableConfiguration from './data-table-configuration.model';
import { DeleteModalService } from '../delete-modal/delete-modal.service';
import fullTextSearch from '../helpers/full-text-search.function';
import { ResponsiveRowComponent } from '../responsive-row/responsive-row.component';
import SimpleObject from '../helpers/simple-object.type';
/**
 * Usado para exibir dados tabulares através de um array de objetos. Possui configurações para
 * habilitar filtro (full text search), operações de exclusão e redirecionamento. Também ajuda
 * a exibir os dados corretamentas quando a tabela se adapta a largura do dispositivo.
 */
@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    /**
     * Faz referencia ao checkbox presente na linha do cabeçalho do elemento "table". Através dele
     * o estado do checkbox é alterado para "checked", "indeterminate" e não checado (checked = false).
     */
    @ViewChild('headerCheckbox') headerCheckbox!: ElementRef;
    /**
     * Configuração da tabela, onde é definido de onde os dados serão buscados, se existirá a opção de
     * redirecionamento, exclusão, etc...
     */
    @Input() dataTableConfiguration!: DataTableConfiguration<any>;
    /**
     * Define se a tabela contará com a funcionalidade de pesquisa
     */
    @Input() enableSearch: boolean = false;
    /**
     * Após retornar os dados, é preciso dar a opção dos usuários carregarem as próximas informações.
     * Essa propriedade marca quando é definido que não existem mais informações a serem carregadas.
     */
    public canLoadMore: boolean = false;
    /**
     * Lista de todos os dados cujas linhas tiveram os checkboxes marcados
     */
    public checkedData: SimpleObject[] = [];
    /**
     * Armazena os dados retornados através da função "fetchData" fornecida na configuração da tabela.
     */
    public data: SimpleObject[] = [];
    /**
     * Dados filtrados da propriedade "data", com base na informação inserida no campo de pesquisa.
     */
    public filteredData: SimpleObject[] | undefined;
    /**
     * Salva o útlimo registro retornado, para caso o usuário queira carregar novas informações;
     */
    private lastRegister: any;
    /**
     * Guarda o valor atual do campo de pesquisa, para filtrar novos dados caso o usuári clique em "carregar mais"
     */
    private lastSearchTerm: string = "";
    /**
     * Seleciona os campos que serão considerados no full text search
     */
    private propertiesToFilter: string[] = [];
    /**
     * Refererência a todos os componentes "ResponsiveRowComponent", para controle das ações de "check", exemplo:
     * Toda vez que o checkbox do cabeçalho é marcado, todas as linhas devem ser marcadas ou desmarcadas.
     */
    @ViewChildren(ResponsiveRowComponent) responsiveRowComponentViewChildrenRef: QueryList<ResponsiveRowComponent> | undefined;

    constructor(private deleteModalService: DeleteModalService) { }
    /**
     * As tabelas da aplicação utilizam "display: grid", por conta disso, é preciso definir o tamanho de cada
     * coluna. Essa proprieade retorna o valor dessa estilização baseando-se nas configurações da tabela.
     */
    get gridColumns(): string {
        let style: string = this.dataTableConfiguration.deleteDataFn ? "auto " : "";

        for(let columnConfiguration of this.dataTableConfiguration.columnOrder) {
            style += `${columnConfiguration.size} `
        }

        return this.dataTableConfiguration.redirectLinkFn ? `${style}auto` : style
    }
    /**
     * Evento que é lançado toda vez que o checkbox de uma linha é marcado.
     * 
     * @param data Cada linha possui um elemento da propriedade "data" (presente no componente DataTable). Esse
     * elemento é enviado de volta, para que seja inserido no array "checkedData".
     */
    checkEvent(data: any): void {
        this.checkedData.push(data);
        this.updateHeaderCheckboxStatus();
    }
    /**
     * Realiza um full text search nos dados presentes na propriedade "data" com base no valor do campo de pesquisa 
     * da tabela.
     * @param searchTerm É o valor do campo de pesquisa
     */
    filterData(searchTerm: string): void {
        if(searchTerm === "") {
            this.filteredData = undefined;
            return;
        }

        this.lastSearchTerm = searchTerm;
        this.filteredData = fullTextSearch(this.lastSearchTerm, this.data, this.propertiesToFilter);
    }
    /**
     * Toda vez que o usuário clica no checkbox do cabeçalho duas ações podem ser tomadas:
     * Caso todos os dados já estejam selecionados, todos as linhas terão o checkbox retirados. Caso
     * nem todos os registros (ou nenhum) estejam selecionados, todos serão selecionados.
     */
    headerCheckboxClick(): void {
        if(!this.responsiveRowComponentViewChildrenRef) return

        this.headerCheckbox.nativeElement.indeterminate = false;
        
        if(this.data.length === this.checkedData.length) {
            this.checkedData = [];
        }
        else {
            this.checkedData = [];
            this.checkedData.push(...this.data);
        }

    }
    /**
     * Verifica se o checkbox de uma determinada linha deve estar checado ou não, baseado
     * no dado que ela representa.
     * @param data Dado, presente na propriedade "data", que será procurado na propriedade "checkedData",
     * para verificar se a linha deve ou não estar checada.
     */
    isChecked(data: SimpleObject): boolean {
        return this.checkedData.find(x => x === data) ? true : false;
    }
    /**
     * Chamada quando o usuário clica no botão com o label "Carregar mais", verifica se existem mais dados
     * e caso sim, os anexa a propriedade "data".
     */
    loadMore(): void {
        const newData = this.dataTableConfiguration.fetchData(
            this.dataTableConfiguration.registersPerPage,
            this.lastRegister
        );

        this.canLoadMore = (newData.length === this.dataTableConfiguration.registersPerPage)
        if(newData.length === 0) {
            return;
        }

        this.lastRegister = newData[newData.length - 1];
        this.data.push(...newData);

        if(this.filteredData) {
            this.filterData(this.lastSearchTerm);
        }
    }
    /**
     * Função chamada pelo framework após a inicialização do componente. Neste caso, ela
     * está sendo usada para verificar se o parâmetro "dataTableConfiguration" está sendo
     * fornecido, e, caso sim, carrega os dados inicias na tabela.
     */
    ngOnInit(): void {
        if(!this.dataTableConfiguration) {
            console.error("Necessário fornecer o parâmetro 'DataTableConfiguration'")
        }
        else {
            this.data = this.dataTableConfiguration.fetchData(
                this.dataTableConfiguration.registersPerPage
            );
            this.dataTableConfiguration.columnOrder.forEach(x => {
                this.propertiesToFilter.push(x.baseProperty);
            })
        }
    }
    /**
     * Função usada quando o usuário tenta excluir um registro. Ela faz isso através de uma 
     * chamada ao serviço "DeleteModal", que fornece uma inscrição para ouvirmos a resposta
     * da decisão da exclusão dos registros. 
     */
    showDeleteModal(): void {
        this.deleteModalService.showModal = true;
        const subscription = this.deleteModalService.subscribeToAction.subscribe(x => {
            if(x === "Delete") {
                this.checkedData.forEach(x => {
                    this.dataTableConfiguration.deleteDataFn!(x);
                    this.data.splice(
                        this.data.findIndex(y => y === x),
                        1
                    );
                });

                this.checkedData = [];
                this.updateHeaderCheckboxStatus();
            }

            subscription.unsubscribe();
        })
    }
    /**
     * Evento que é lançado toda vez que o checkbox de uma linha é desmarcado.
     * 
     * @param data Cada linha possui um elemento da propriedade "data" (presente no componente DataTable). Esse
     * elemento é enviado de volta, para que seja inserido removido do array "checkedData"
     */
    uncheckEvent(data: any): void {
        const uncheckIndex: number = this.checkedData.findIndex(x => x === data);
        if(uncheckIndex === -1) return;

        this.checkedData.splice(uncheckIndex, 1);
        this.updateHeaderCheckboxStatus();
    }
    /**
     * O checkbox do cabeçalho pode estar em três estados: desmarcado, indeterminado e marcado. Esta função atualiza
     * o status baseando-se no número de linhas selecionadas.
     */
    private updateHeaderCheckboxStatus(): void {
        this.headerCheckbox.nativeElement.checked = this.checkedData.length === this.data.length && this.data.length > 0;
        this.headerCheckbox.nativeElement.indeterminate = this.checkedData.length > 0 && this.checkedData.length < this.data.length;
    }
}
