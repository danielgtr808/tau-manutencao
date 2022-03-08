import RemoveSymbol from "../helpers/remove-symbol.type"

type SelectAnswerConfiguration<T> = {
    data: T[],
    idProperty: RemoveSymbol<T>,
    valueProperty: RemoveSymbol<T>,
}

export default SelectAnswerConfiguration