import Default from "../../default-behavior/default.model";
import ServiceOrderType from "../service-order/service-order-type.enum";
import ServiceSolicitationStatus from "./service-solicitation-status.enum";

interface ServiceSolicitation extends Default {
    description: string;
    machineName: string;
    machineTag: string;
    reprovationReason: string;
    serviceOrderType: `${ServiceOrderType}`;
    sectorName: string;
    status: `${ServiceSolicitationStatus}`;
    symptom: string;
}

export default ServiceSolicitation