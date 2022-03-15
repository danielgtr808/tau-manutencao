import SimpleObject from "./simple-object.type";

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