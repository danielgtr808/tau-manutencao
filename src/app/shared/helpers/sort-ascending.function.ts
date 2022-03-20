/**
 * Usado para reutilizar a lógica de uma ordenação de dados case-insensitive.
 * @param data Array de dados que serão ordenados
 * @param property Propriedade do objeto que compõe o array de dados que será usada para ordenar
 * os objetos
 * @returns Um array com os mesmos elementos do array passado no parâmetro "data" só que ordenados
 * pela propriedade passada no parâmetro "property".
 */
function sortAscending<T>(data: T[], property: keyof T): T[] {
    return data.sort((a, b) => `${a[property]}`.toLowerCase() < `${b[property]}`.toLowerCase() ? -1 : 1);
}

export default sortAscending