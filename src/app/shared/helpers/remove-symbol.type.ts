/**
 * As propriedades de um objeto podem ser de três tipos: string, number e symbol, exemplo;
 * const example = {
 *      a: "exemplo de propriedade string",
 *      123: "exemplo de propriedade number",
 * }
 * 
 * Nesse examplo, a propriedade "a" é uma string, e a propriedade "123" é um número (não quer
 * dizer que seus tipos sejam string e number, respectivamente, mas que, o nome das propriedades
 * possuem esses tipos).
 * 
 * Existe um terceiro tipo de nome de propriedade, que é o Symbol, você pode saber mais sobre el
 * aqui: https://developer.mozilla.org/pt-BR/docs/Glossary/Symbol
 * 
 * 
 * Por ser um valor gerado durante o tempo de execução, o intelissense tem problemas em fornecer
 * opções de auto-preenchimento quando se trabalha com o tipo "key of" de um tipo genérico. Por
 * conta disso, esse tipo remove as propriedades do tipo "Symbol" 
 */
type RemoveSymbol<T> = {[key in keyof T]: key extends symbol ? never : key}[keyof T]

export default RemoveSymbol