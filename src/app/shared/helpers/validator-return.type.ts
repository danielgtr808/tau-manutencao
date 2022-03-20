/**
 * Tipo que fucniona como syntax sujar, ajudando a reduzir a quantidade de vezes que é necessário
 * escrever o tipo de retorno para os validadadores da classe que implementa o tipo {@link: Validator}
 */
type ValidatorReturn<T extends number | string> = {
    [key in T]: any
} | null

export default ValidatorReturn