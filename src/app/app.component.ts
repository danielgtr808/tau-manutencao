import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tau manutencao';

    constructor() {
        localStorage.setItem("keys", JSON.stringify({
            "employees": 4,
            "departments": 2,
            "sectors": 7
        }));

        localStorage.setItem("employees", JSON.stringify([
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 1,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Andriy Belo Pegado'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 2,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Diogo Bairros Amorim'

            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 3,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Levi Lage Belchior'

            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 4,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Liana Muxagata Marçal'

            }
        ]));

        localStorage.setItem("departments", JSON.stringify([
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 1,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Gestão'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                id: 2,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Produção'
            }
        ]));

        localStorage.setItem("sectors", JSON.stringify([
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 2,
                id: 1,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Almoxarifado'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 2,
                id: 2,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Bancada/AJustagem/Montagem'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 2,
                id: 3,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Fresadoras'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 1,
                id: 4,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Planejamento e controle da produção - PCP'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 1,
                id: 5,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Projetos'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 1,
                id: 6,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Qualidade'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                departmentId: 2,
                id: 7,
                isActive: true,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                name: 'Tornearia'
            }
        ]));

        localStorage.setItem("service-solicitation", JSON.stringify([
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                description: '',
                id: 10,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                machine: 'Calandra',
                machineTag: 'CAL001-1',
                problemImage: '',
                reprovationReason: '',
                serviceOrderType: 'Corretiva',
                sector: 'Almoxarifado',
                status: 'Pendente',
                symptom: 'Eixo não avança com o giro do manípulo'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                description: '',
                id: 11,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                machine: 'Esmeril',
                machineTag: 'ESM001-1',
                problemImage: '',
                reprovationReason: '',
                serviceOrderType: 'Corretiva',
                sector: 'Bancada',
                status: 'Pendente',
                symptom: 'Rebolo desgastado'
            },
            {
                createdBy: 'Manutentor Tau',
                creationDate: '2022/03/01',
                description: '',
                id: 12,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                machine: 'Torno',
                machineTag: 'TOR001-1',
                problemImage: '',
                reprovationReason: '',
                serviceOrderType: 'Corretiva',
                sector: 'Tornearia',
                status: 'Pendente',
                symptom: 'Vibração excessiva durante a usinagem'
            },
            {
                description: '',
                id: 13,
                lastEditedBy: 'Manutentor Tau',
                lastEditionDate: '2022/03/01',
                machine: 'Fresadora',
                machineTag: 'FRE001-1',
                problemImage: '',
                reprovationReason: '',
                serviceOrderType: 'Corretiva',
                sector: 'Fresadoras',
                status: 'Pendente',
                symptom: 'Ferramenta presa no mandril'
            }
        ]));
        
        localStorage.setItem("users", JSON.stringify([
            {
                displayName: 'Manutentor Tau',
                email: 'manutentor@tau.com.br',
                password: 'manutencao',
                photoUrl: ''
            }
        ]));
    }
}
