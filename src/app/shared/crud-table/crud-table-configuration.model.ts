import RemoveSymbol from "../helpers/remove-symbol.type";

interface CrudTableConfiguration<T> {
    columnOrder: { baseProperty: RemoveSymbol<T>, displayName: string, size: "auto" | `${number}fr` }[],
    fetchData: (registersPerPage: number, lastRegister?: T) => T[],
    newRegisterLink: string,
    redirectLinkFn: (model: T) => string,
    registersPerPage: number
}

export default CrudTableConfiguration