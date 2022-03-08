import SimpleObject from "./simple-object.type";

function fullTextSearch(term: string, data: SimpleObject[]): SimpleObject[] {
    const filteredData: SimpleObject[] = [];

    for(let d of data) {
        for(let property in d) {
            if(`${d[property]}`.toLowerCase().includes(term.toLowerCase())) {
                filteredData.push(d);
                break;
            }
        }
    }

    return filteredData;
}

export default fullTextSearch;