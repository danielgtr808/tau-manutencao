import RemoveSymbol from "../helpers/remove-symbol.type"

type ColumnOrder<T> = {
    baseProperty: RemoveSymbol<T>,
    displayName: string,
    size: "auto" | `${number}fr`
}

export default ColumnOrder