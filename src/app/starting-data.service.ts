import { DepartmentService } from './backend/models/departments/department.service';
import { EmployeeService } from './backend/models/employees/employee.service';
import { Injectable } from '@angular/core';
import { MachineService } from './backend/models/machines/machine.service';
import { MachineFamilyService } from './backend/models/machine-families/machine-family.service';
import { SectorService } from './backend/models/sectors/sector.service';
import { ServiceSolicitationService } from './backend/models/service-solicitation/service-solicitation.service';
import { SymptomService } from './backend/models/symptoms/symptom.service';
import { TagService } from './backend/models/tags/tag.service';
import { LoginService } from './backend/models/login/login.service';

@Injectable({
    providedIn: 'root'
})
export class StartingDataService {

    constructor(
        private departmentService: DepartmentService,
        private employeeService: EmployeeService,
        private loginService: LoginService,
        private machineService: MachineService,
        private machineFamilyService: MachineFamilyService,
        private sectorService: SectorService,
        private serviceSolictationService: ServiceSolicitationService,
        private symptomService: SymptomService,
        private tagService: TagService
    ) {
        const dataStarted = localStorage.getItem("data-started")
        if(dataStarted) return

        localStorage.clear();

        localStorage.setItem("users", JSON.stringify([
            {
                displayName: 'Manutentor Tau',
                email: 'manutentor@tau.com.br',
                password: 'manutencao',
                photoUrl: ''
            }
        ]));
        this.loginService.login("manutentor@tau.com.br", "manutencao");

        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Aminata Raposo Nóbrega'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Andriy Belo Pegado'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Barbara Maciel Carvalho'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Diogo Bairros Amorim'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Helder Graça Peseiro'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Levi Lage Belchior'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Liana Muxagata Marçal'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Matheus Sequeira Uchoa'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Nélson Morão Lemos'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Sónia Pedro Feira'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Viviana Prada Madruga'
        });
        this.employeeService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Vladislav Lima Cortês'
        });





        this.departmentService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Gestão'
        })

        this.departmentService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Produção'
        })





        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Almoxarifado'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Bancada/Ajustagem/Montagem'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Fresadoras'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Gestão',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Planejamento e controle da produção - PCP'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Gestão',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Projetos'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Gestão',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Qualidade'
        });
        this.sectorService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Tornearia'
        });





        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Tornos',
            prefix: 'TOR'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Fresadoras',
            prefix: 'FRE'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Serras',
            prefix: 'SER'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Prensas',
            prefix: 'PRE'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Esmeris',
            prefix: 'ESM'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Guilhotinas', 
            prefix: 'GUI'
        });
        this.machineFamilyService.create({
            createdBy: '',
            creationDate: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            name: 'Calandras',
            prefix: 'CAL'
        });





        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Calandras',
            familyPrefix: 'CAL',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Calandra'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Esmeris',
            familyPrefix: 'ESM',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Esmeril'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Fresadoras',
            familyPrefix: 'FRE',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Fresadora Bright Clara'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Fresadoras',
            familyPrefix: 'FRE',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Fresadora Bright Cinza'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Guilhotinas',
            familyPrefix: 'GUI',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Guilhotina'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Serras',
            familyPrefix: 'SER',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Serra de Fita Franho'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Serras',
            familyPrefix: 'SER',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Serra de Fita Etti Vertical'
        });
        this.machineService.create({
            createdBy: '',
            creationDate: '',
            departmentName: 'Produção',
            familyName: 'Tornos',
            familyPrefix: 'TOR',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            image: '',
            name: 'Romi S20-A'
        });

        



        this.tagService.create({
            createdBy: '',
            creationDate: '',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineId: 'CAL001',
            machineName: 'Calandra'
        });
        this.tagService.create({
            createdBy: '',
            creationDate: '',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineId: 'ESM001',
            machineName: 'Esmeril'
        });
        this.tagService.create({
            createdBy: '',
            creationDate: '',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineId: 'FRE001',
            machineName: 'Fresadora Bright Clara'
        });
        this.tagService.create({
            createdBy: '',
            creationDate: '',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineId: 'TOR001',
            machineName: 'Romi S20-A'
        });
        this.tagService.create({
            createdBy: '',
            creationDate: '',
            id: '',
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineId: 'TOR001',
            machineName: 'Romi S20-A'
        });





        this.symptomService.create({
            createdBy: '',
            creationDate: '',
            description: 'Eixo não avança com o giro do manípulo',
            id: 1,
            isActive: true,
            lastEditedBy: 'Manutentor Tau',
            lastEditionDate: '2022/03/01'
        });
        this.symptomService.create({
            createdBy: '',
            creationDate: '',
            description: 'Rebolo desgastado',
            id: 2,
            isActive: true,
            lastEditedBy: 'Manutentor Tau',
            lastEditionDate: '2022/03/01'
        });
        this.symptomService.create({
            createdBy: '',
            creationDate: '',
            description: 'Vibração excessiva durante a usinagem',
            id: 3,
            isActive: true,
            lastEditedBy: 'Manutentor Tau',
            lastEditionDate: '2022/03/01'
        });
        this.symptomService.create({
            createdBy: '',
            creationDate: '',
            description: 'Ferramenta travada no mandril',
            id: 4,
            isActive: true,
            lastEditedBy: 'Manutentor Tau',
            lastEditionDate: '2022/03/01'
        });


        


        this.serviceSolictationService.create({
            createdBy: '',
            creationDate: '',
            description: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineName: 'Calandra',
            machineTag: 'CAL001-1',
            reprovationReason: '',
            serviceOrderType: 'Corretiva',
            sectorName: 'Almoxarifado',
            status: 'Pendente',
            symptom: 'Eixo não avança com o giro do manípulo'
        });
        this.serviceSolictationService.create({
            createdBy: '',
            creationDate: '',
            description: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineName: 'Esmeril',
            machineTag: 'ESM001-1',
            reprovationReason: '',
            serviceOrderType: 'Corretiva',
            sectorName: 'Bancada/Ajustagem/Montagem',
            status: 'Pendente',
            symptom: 'Rebolo desgastado'
        });
        this.serviceSolictationService.create({
            createdBy: '',
            creationDate: '',
            description: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineName: 'Romi S20-A',
            machineTag: 'TOR001-1',
            reprovationReason: '',
            serviceOrderType: 'Corretiva',
            sectorName: 'Tornearia',
            status: 'Pendente',
            symptom: 'Vibração excessiva durante a usinagem'
        });
        this.serviceSolictationService.create({
            createdBy: '',
            creationDate: '',
            description: '',
            id: 0,
            isActive: true,
            lastEditedBy: '',
            lastEditionDate: '',
            machineName: 'Fresadora Bright Clara',
            machineTag: 'FRE001-1',
            reprovationReason: '',
            serviceOrderType: 'Corretiva',
            sectorName: 'Fresadoras',
            status: 'Pendente',
            symptom: 'Ferramenta travada no mandril'
        });




        localStorage.setItem("data-started", JSON.stringify({ }))
        this.loginService.logOut();
    }
}
