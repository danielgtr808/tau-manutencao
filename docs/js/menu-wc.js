'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tau-manutencao documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-da9c5e72d6e7ae0241807dae2703a79093b65fe395449bd7601d660f9658bb9cceee048fc21a6e10f639a00fc8878b27abf23c2006a52546fed84fb3f5a3d8af"' : 'data-target="#xs-components-links-module-AppModule-da9c5e72d6e7ae0241807dae2703a79093b65fe395449bd7601d660f9658bb9cceee048fc21a6e10f639a00fc8878b27abf23c2006a52546fed84fb3f5a3d8af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-da9c5e72d6e7ae0241807dae2703a79093b65fe395449bd7601d660f9658bb9cceee048fc21a6e10f639a00fc8878b27abf23c2006a52546fed84fb3f5a3d8af"' :
                                            'id="xs-components-links-module-AppModule-da9c5e72d6e7ae0241807dae2703a79093b65fe395449bd7601d660f9658bb9cceee048fc21a6e10f639a00fc8878b27abf23c2006a52546fed84fb3f5a3d8af"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BackendModule.html" data-type="entity-link" >BackendModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-5a516e122dae869dc3a8cea03bb7a920a9585afaf036fb0e6786178f3c1469aa50f04942b5481ab407586ea70565631e53746db3fca4d506dd04acb6ce3f5a77"' : 'data-target="#xs-components-links-module-DashboardModule-5a516e122dae869dc3a8cea03bb7a920a9585afaf036fb0e6786178f3c1469aa50f04942b5481ab407586ea70565631e53746db3fca4d506dd04acb6ce3f5a77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-5a516e122dae869dc3a8cea03bb7a920a9585afaf036fb0e6786178f3c1469aa50f04942b5481ab407586ea70565631e53746db3fca4d506dd04acb6ce3f5a77"' :
                                            'id="xs-components-links-module-DashboardModule-5a516e122dae869dc3a8cea03bb7a920a9585afaf036fb0e6786178f3c1469aa50f04942b5481ab407586ea70565631e53746db3fca4d506dd04acb6ce3f5a77"' }>
                                            <li class="link">
                                                <a href="components/DashboardPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SsOsIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SsOsIndicatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InterventionsModule.html" data-type="entity-link" >InterventionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InterventionsModule-11d6f224e960b45d4e636ffb093cd5aaa23ab8e4c4c053fd5bd9d1341e920c4b73179700ca0e9942f3f0ca07662da3d7820023cd4059d605fdd70b61d5edc5fa"' : 'data-target="#xs-components-links-module-InterventionsModule-11d6f224e960b45d4e636ffb093cd5aaa23ab8e4c4c053fd5bd9d1341e920c4b73179700ca0e9942f3f0ca07662da3d7820023cd4059d605fdd70b61d5edc5fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InterventionsModule-11d6f224e960b45d4e636ffb093cd5aaa23ab8e4c4c053fd5bd9d1341e920c4b73179700ca0e9942f3f0ca07662da3d7820023cd4059d605fdd70b61d5edc5fa"' :
                                            'id="xs-components-links-module-InterventionsModule-11d6f224e960b45d4e636ffb093cd5aaa23ab8e4c4c053fd5bd9d1341e920c4b73179700ca0e9942f3f0ca07662da3d7820023cd4059d605fdd70b61d5edc5fa"' }>
                                            <li class="link">
                                                <a href="components/CausesDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CausesDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CausesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CausesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefectsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefectsDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefectsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefectsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolutionsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolutionsDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolutionsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolutionsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SymptomsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SymptomsDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SymptomsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SymptomsFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-f3eb4be7c7524b48e9b768930bbcf6dc8c735402aca17a9ea6afd05fdb5be4fa689aba05407da3c8fd329d17fdb43e72f516f6f7a2e4ff6191af4e45d13ef2fa"' : 'data-target="#xs-components-links-module-LoginModule-f3eb4be7c7524b48e9b768930bbcf6dc8c735402aca17a9ea6afd05fdb5be4fa689aba05407da3c8fd329d17fdb43e72f516f6f7a2e4ff6191af4e45d13ef2fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-f3eb4be7c7524b48e9b768930bbcf6dc8c735402aca17a9ea6afd05fdb5be4fa689aba05407da3c8fd329d17fdb43e72f516f6f7a2e4ff6191af4e45d13ef2fa"' :
                                            'id="xs-components-links-module-LoginModule-f3eb4be7c7524b48e9b768930bbcf6dc8c735402aca17a9ea6afd05fdb5be4fa689aba05407da3c8fd329d17fdb43e72f516f6f7a2e4ff6191af4e45d13ef2fa"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManpowerModule.html" data-type="entity-link" >ManpowerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManpowerModule-373ced898e8b07602b6a8ccf41496077fbd9d1e58735351746cbaa17c10e223ae5570c6f313300a8cd7ee2085bb94c54dd461ed6b12e5a16b601eadf01a885a7"' : 'data-target="#xs-components-links-module-ManpowerModule-373ced898e8b07602b6a8ccf41496077fbd9d1e58735351746cbaa17c10e223ae5570c6f313300a8cd7ee2085bb94c54dd461ed6b12e5a16b601eadf01a885a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManpowerModule-373ced898e8b07602b6a8ccf41496077fbd9d1e58735351746cbaa17c10e223ae5570c6f313300a8cd7ee2085bb94c54dd461ed6b12e5a16b601eadf01a885a7"' :
                                            'id="xs-components-links-module-ManpowerModule-373ced898e8b07602b6a8ccf41496077fbd9d1e58735351746cbaa17c10e223ae5570c6f313300a8cd7ee2085bb94c54dd461ed6b12e5a16b601eadf01a885a7"' }>
                                            <li class="link">
                                                <a href="components/DepartmentDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DepartmentFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeesDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeesDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectorDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectorDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectorFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectorFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link" >ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourcesModule-415aaaa8d17de7fb9b99e93044fdf3fa09a88da249198b5cc2d4d79b0bb33346e9e579db97b72d9611fe4092cea8d14fb6f4f7e46b92f20be9fd1e45e8abcfee"' : 'data-target="#xs-components-links-module-ResourcesModule-415aaaa8d17de7fb9b99e93044fdf3fa09a88da249198b5cc2d4d79b0bb33346e9e579db97b72d9611fe4092cea8d14fb6f4f7e46b92f20be9fd1e45e8abcfee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-415aaaa8d17de7fb9b99e93044fdf3fa09a88da249198b5cc2d4d79b0bb33346e9e579db97b72d9611fe4092cea8d14fb6f4f7e46b92f20be9fd1e45e8abcfee"' :
                                            'id="xs-components-links-module-ResourcesModule-415aaaa8d17de7fb9b99e93044fdf3fa09a88da249198b5cc2d4d79b0bb33346e9e579db97b72d9611fe4092cea8d14fb6f4f7e46b92f20be9fd1e45e8abcfee"' }>
                                            <li class="link">
                                                <a href="components/EquipmentsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentsDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquipmentsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MachineFamiliesDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MachineFamiliesDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MachineFamiliesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MachineFamiliesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MachinesDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MachinesDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MachinesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MachinesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ServicesModule-04274beabb60eb08b094f3f28c41b61bbcc2645069ab4902ba643321605e42b41ae456b5300cbf55d99763fc5dd46946678e793987d3107e6cd91a10abfcf0c5"' : 'data-target="#xs-components-links-module-ServicesModule-04274beabb60eb08b094f3f28c41b61bbcc2645069ab4902ba643321605e42b41ae456b5300cbf55d99763fc5dd46946678e793987d3107e6cd91a10abfcf0c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServicesModule-04274beabb60eb08b094f3f28c41b61bbcc2645069ab4902ba643321605e42b41ae456b5300cbf55d99763fc5dd46946678e793987d3107e6cd91a10abfcf0c5"' :
                                            'id="xs-components-links-module-ServicesModule-04274beabb60eb08b094f3f28c41b61bbcc2645069ab4902ba643321605e42b41ae456b5300cbf55d99763fc5dd46946678e793987d3107e6cd91a10abfcf0c5"' }>
                                            <li class="link">
                                                <a href="components/ServiceOrderDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceOrderDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceOrderFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceOrderFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceSolicitationDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceSolicitationDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceSolicitationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceSolicitationFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-09e21b46bfdb6eac310bd3684c2ab4be19bca8974aa405339c62cccec70043adf0c2dba4e5a3ad2080f44600bbca9f91731963ab4a59cfb57646349d5e374263"' : 'data-target="#xs-components-links-module-SharedModule-09e21b46bfdb6eac310bd3684c2ab4be19bca8974aa405339c62cccec70043adf0c2dba4e5a3ad2080f44600bbca9f91731963ab4a59cfb57646349d5e374263"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-09e21b46bfdb6eac310bd3684c2ab4be19bca8974aa405339c62cccec70043adf0c2dba4e5a3ad2080f44600bbca9f91731963ab4a59cfb57646349d5e374263"' :
                                            'id="xs-components-links-module-SharedModule-09e21b46bfdb6eac310bd3684c2ab4be19bca8974aa405339c62cccec70043adf0c2dba4e5a3ad2080f44600bbca9f91731963ab4a59cfb57646349d5e374263"' }>
                                            <li class="link">
                                                <a href="components/BorderedInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BorderedInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentTopMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentTopMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrudTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrudTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultDataPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultDataPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultFormPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultFormPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LongAnswerFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LongAnswerFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioButtonAnswerFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonAnswerFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponsiveRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponsiveRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectAnswerFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectAnswerFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShortAnswerFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortAnswerFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideMenuItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SummaryContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CauseValidator.html" data-type="entity-link" >CauseValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefectValidator.html" data-type="entity-link" >DefectValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepartmentValidator.html" data-type="entity-link" >DepartmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmployeeValidator.html" data-type="entity-link" >EmployeeValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EquipmentValidator.html" data-type="entity-link" >EquipmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginPageValidator.html" data-type="entity-link" >LoginPageValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/MachineFamilyValidator.html" data-type="entity-link" >MachineFamilyValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/MachineValidator.html" data-type="entity-link" >MachineValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/SectorValidator.html" data-type="entity-link" >SectorValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceOrderValidator.html" data-type="entity-link" >ServiceOrderValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceOrderViewmodel.html" data-type="entity-link" >ServiceOrderViewmodel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceSolicitationValidator.html" data-type="entity-link" >ServiceSolicitationValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/SolutionValidator.html" data-type="entity-link" >SolutionValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/SymptomValidator.html" data-type="entity-link" >SymptomValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagValidator.html" data-type="entity-link" >TagValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CauseService.html" data-type="entity-link" >CauseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefaultBehaviorService.html" data-type="entity-link" >DefaultBehaviorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefectService.html" data-type="entity-link" >DefectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteModalService.html" data-type="entity-link" >DeleteModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartmentService.html" data-type="entity-link" >DepartmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmployeeService.html" data-type="entity-link" >EmployeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EquipmentService.html" data-type="entity-link" >EquipmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MachineFamilyService.html" data-type="entity-link" >MachineFamilyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MachineService.html" data-type="entity-link" >MachineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceOrderService.html" data-type="entity-link" >ServiceOrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceSolicitationService.html" data-type="entity-link" >ServiceSolicitationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SolutionService.html" data-type="entity-link" >SolutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartingDataService.html" data-type="entity-link" >StartingDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SymptomService.html" data-type="entity-link" >SymptomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypedFormBuilderService.html" data-type="entity-link" >TypedFormBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cause.html" data-type="entity-link" >Cause</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataTableConfiguration.html" data-type="entity-link" >DataTableConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Default.html" data-type="entity-link" >Default</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Defect.html" data-type="entity-link" >Defect</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Equipment.html" data-type="entity-link" >Equipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginPage.html" data-type="entity-link" >LoginPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Machine.html" data-type="entity-link" >Machine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MachineFamily.html" data-type="entity-link" >MachineFamily</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceOrder.html" data-type="entity-link" >ServiceOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceSolicitation.html" data-type="entity-link" >ServiceSolicitation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Solution.html" data-type="entity-link" >Solution</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubPageLink.html" data-type="entity-link" >SubPageLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Symptom.html" data-type="entity-link" >Symptom</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tag.html" data-type="entity-link" >Tag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});