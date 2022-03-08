import RemoveSymbol from "../helpers/remove-symbol.type";

interface DataTableConfiguration<T> {
    columnOrder: { baseProperty: RemoveSymbol<T>, displayName: string, size: "auto" | `${number}fr` }[],
    fetchData: () => T[],
    redirectLinkFn?: (model: T) => string,    
}

export default DataTableConfiguration