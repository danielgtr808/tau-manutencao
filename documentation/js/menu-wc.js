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
                                            'data-target="#components-links-module-DashboardModule-db0ff5f92175f7d72254be061739d7d018a880b9e5f6deff54efba3e38138757f52431e2acaba570826250f7a747549c3bc12fd0823582cf3f7cf06b294b4cc6"' : 'data-target="#xs-components-links-module-DashboardModule-db0ff5f92175f7d72254be061739d7d018a880b9e5f6deff54efba3e38138757f52431e2acaba570826250f7a747549c3bc12fd0823582cf3f7cf06b294b4cc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-db0ff5f92175f7d72254be061739d7d018a880b9e5f6deff54efba3e38138757f52431e2acaba570826250f7a747549c3bc12fd0823582cf3f7cf06b294b4cc6"' :
                                            'id="xs-components-links-module-DashboardModule-db0ff5f92175f7d72254be061739d7d018a880b9e5f6deff54efba3e38138757f52431e2acaba570826250f7a747549c3bc12fd0823582cf3f7cf06b294b4cc6"' }>
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
                                            'data-target="#components-links-module-InterventionsModule-22128c2af7226d3f674db6bf62eedfa0f8d0c614165ee4c2b859b0c0bb75f288ee13365a1216aabeba5daf600a418dc55daa6f4c1067b1149ec0b66a5f9e5ac2"' : 'data-target="#xs-components-links-module-InterventionsModule-22128c2af7226d3f674db6bf62eedfa0f8d0c614165ee4c2b859b0c0bb75f288ee13365a1216aabeba5daf600a418dc55daa6f4c1067b1149ec0b66a5f9e5ac2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InterventionsModule-22128c2af7226d3f674db6bf62eedfa0f8d0c614165ee4c2b859b0c0bb75f288ee13365a1216aabeba5daf600a418dc55daa6f4c1067b1149ec0b66a5f9e5ac2"' :
                                            'id="xs-components-links-module-InterventionsModule-22128c2af7226d3f674db6bf62eedfa0f8d0c614165ee4c2b859b0c0bb75f288ee13365a1216aabeba5daf600a418dc55daa6f4c1067b1149ec0b66a5f9e5ac2"' }>
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
                                            'data-target="#components-links-module-LoginModule-54b509040960235b2b3f4b8a5148caf80cd1355ce4feb483ccead492511dfd71c1546baed835c372d76b49d1db6ac5e05a06feb74a3664bac67268b67bf1f2db"' : 'data-target="#xs-components-links-module-LoginModule-54b509040960235b2b3f4b8a5148caf80cd1355ce4feb483ccead492511dfd71c1546baed835c372d76b49d1db6ac5e05a06feb74a3664bac67268b67bf1f2db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-54b509040960235b2b3f4b8a5148caf80cd1355ce4feb483ccead492511dfd71c1546baed835c372d76b49d1db6ac5e05a06feb74a3664bac67268b67bf1f2db"' :
                                            'id="xs-components-links-module-LoginModule-54b509040960235b2b3f4b8a5148caf80cd1355ce4feb483ccead492511dfd71c1546baed835c372d76b49d1db6ac5e05a06feb74a3664bac67268b67bf1f2db"' }>
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
                                            'data-target="#components-links-module-ManpowerModule-633eaa8a6949baad51aefff9e4bc55b55097a188927f28a75875bdec00f3b93825ac9379fb49658e25ffdfa24896773c3ef042c29688abb92f66c11688254cad"' : 'data-target="#xs-components-links-module-ManpowerModule-633eaa8a6949baad51aefff9e4bc55b55097a188927f28a75875bdec00f3b93825ac9379fb49658e25ffdfa24896773c3ef042c29688abb92f66c11688254cad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManpowerModule-633eaa8a6949baad51aefff9e4bc55b55097a188927f28a75875bdec00f3b93825ac9379fb49658e25ffdfa24896773c3ef042c29688abb92f66c11688254cad"' :
                                            'id="xs-components-links-module-ManpowerModule-633eaa8a6949baad51aefff9e4bc55b55097a188927f28a75875bdec00f3b93825ac9379fb49658e25ffdfa24896773c3ef042c29688abb92f66c11688254cad"' }>
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
                                            'data-target="#components-links-module-ResourcesModule-bc6ddef5c8375cb0dc715b9e12b5721ec5d96ae5a343c53f22a667c083c04dc53d8ae651123377bac54ee921d299dfdd48324d9934b93234f29e35e595e75b2d"' : 'data-target="#xs-components-links-module-ResourcesModule-bc6ddef5c8375cb0dc715b9e12b5721ec5d96ae5a343c53f22a667c083c04dc53d8ae651123377bac54ee921d299dfdd48324d9934b93234f29e35e595e75b2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-bc6ddef5c8375cb0dc715b9e12b5721ec5d96ae5a343c53f22a667c083c04dc53d8ae651123377bac54ee921d299dfdd48324d9934b93234f29e35e595e75b2d"' :
                                            'id="xs-components-links-module-ResourcesModule-bc6ddef5c8375cb0dc715b9e12b5721ec5d96ae5a343c53f22a667c083c04dc53d8ae651123377bac54ee921d299dfdd48324d9934b93234f29e35e595e75b2d"' }>
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
                                            'data-target="#components-links-module-ServicesModule-59493fe6bbdd8b8d930660d52719a0697325ac191e12b6994d3928c77110975ef21279caa152076bb15ab9373ba78c2301610c6c704371f59bac368c822ff373"' : 'data-target="#xs-components-links-module-ServicesModule-59493fe6bbdd8b8d930660d52719a0697325ac191e12b6994d3928c77110975ef21279caa152076bb15ab9373ba78c2301610c6c704371f59bac368c822ff373"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServicesModule-59493fe6bbdd8b8d930660d52719a0697325ac191e12b6994d3928c77110975ef21279caa152076bb15ab9373ba78c2301610c6c704371f59bac368c822ff373"' :
                                            'id="xs-components-links-module-ServicesModule-59493fe6bbdd8b8d930660d52719a0697325ac191e12b6994d3928c77110975ef21279caa152076bb15ab9373ba78c2301610c6c704371f59bac368c822ff373"' }>
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
                                            'data-target="#components-links-module-SharedModule-3ea8b63b91c1b683e75419b32f394fa0ac8ceb77ee311683a2f1f56bd1767b31769d043a0591cffffd0f076d3c60a6573e9cbc5cbcd17855159fdfb42e562d0f"' : 'data-target="#xs-components-links-module-SharedModule-3ea8b63b91c1b683e75419b32f394fa0ac8ceb77ee311683a2f1f56bd1767b31769d043a0591cffffd0f076d3c60a6573e9cbc5cbcd17855159fdfb42e562d0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3ea8b63b91c1b683e75419b32f394fa0ac8ceb77ee311683a2f1f56bd1767b31769d043a0591cffffd0f076d3c60a6573e9cbc5cbcd17855159fdfb42e562d0f"' :
                                            'id="xs-components-links-module-SharedModule-3ea8b63b91c1b683e75419b32f394fa0ac8ceb77ee311683a2f1f56bd1767b31769d043a0591cffffd0f076d3c60a6573e9cbc5cbcd17855159fdfb42e562d0f"' }>
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