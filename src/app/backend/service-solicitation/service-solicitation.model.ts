import ServiceOrderType from "../service-order/service-order-type.type";
import ServiceSolicitationStatus from "./service-solicitation-status.type";

interface ServiceSolicitation {
    createdBy: string;
    creationDate: string;
    description: string;
    id: number;
    lastEditedBy: string;
    lastEditionDate: string;
    machine: string;
    machineTag: string;
    problemImage: string;
    reprovationReason: string;
    serviceOrderType: ServiceOrderType;
    sector: string;
    status: ServiceSolicitationStatus;
    symptom: string;
}

export default ServiceSolicitation