import ColumnOrder from "./column-order.type";

interface DataTableConfiguration<T> {
    columnOrder: ColumnOrder<T>[],
    deleteDataFn?: (model: T) => void,
    fetchData: (registersPerPage: number, lastRegister?: T) => T[],
    redirectLinkFn?: (model: T) => string,
    registersPerPage: number  
}

export default DataTableConfiguration