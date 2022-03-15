import ServiceOrder from "src/app/backend/models/service-order/service-order.model";

class ServiceOrderViewmodel  {

    public id: any;
    public machineName: string;
    public machineTag: string;
    public sectorName: string;
    public symptom: string;

    constructor(serviceOrder: ServiceOrder) {
        this.id = serviceOrder.id;
        this.machineName = serviceOrder.baseSS.machineName;
        this.machineTag = serviceOrder.baseSS.machineTag;
        this.sectorName = serviceOrder.baseSS.sectorName;
        this.symptom = serviceOrder.baseSS.symptom;
    }

}

export default ServiceOrderViewmodel