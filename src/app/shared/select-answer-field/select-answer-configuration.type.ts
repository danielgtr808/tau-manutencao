import RemoveSymbol from "../helpers/remove-symbol.type"

type SelectAnswerConfiguration<T> = {
    data: T[],
    determineDisplayProperty: RemoveSymbol<T>,
    idProperty: RemoveSymbol<T>,
    valueProperty: RemoveSymbol<T>,
}

export default SelectAnswerConfiguration