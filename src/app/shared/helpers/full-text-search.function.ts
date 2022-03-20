import SimpleObject from "./simple-object.type";
/**
 * Realiza uma pesquisa do tipo "fullText" em um array de objetos, considerando apenas as propriedades
 * escolhidas
 * @param term Valor a ser pesquisado nos objetos do array passado
 * @param data Array de dados que serão filtrados
 * @param propertiesToFilter Propriedades dos objetos presentes no array de dados que serão usados para
 * serem filtradas com base no parâmetro "term"
 * @returns Um array contendo os objetos filtrados
 */
function fullTextSearch<T extends SimpleObject>(term: string, data: T[], propertiesToFilter: (keyof T)[]): T[] {
    const filteredData: T[] = [];

    for(let d of data) {
        for(let property of propertiesToFilter) {
            if(`${d[property]}`.toLowerCase().includes(term.toLowerCase())) {
                filteredData.push(d);
                break;
            }
        }
    }

    return filteredData;
}

export default fullTextSearch;