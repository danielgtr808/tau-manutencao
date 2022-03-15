import Default from "../../default-behavior/default.model";
import ServiceSolicitation from "../service-solicitation/service-solicitation.model";
import ServiceOrderStatus from "./service-order-status.enum";

interface ServiceOrder extends Default {
    conclusion: string,
    baseSS: ServiceSolicitation,
    reprovationReason: string,
    responsibleForMaintenance: string,
    serviceSolicitationId: number,
    status: `${ServiceOrderStatus}`
}

export default ServiceOrder