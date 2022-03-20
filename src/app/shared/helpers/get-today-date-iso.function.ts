/**
 * Retorna a data de hoje no formado "yyyy/mm/dd"
 * @returns Uma string contendo a data de hoje no format "yyyy/mm/dd"
 */
function getTodayDateISO(): string {
    let today =  new Date().toISOString().split('T')[0];
    while(today.indexOf('-') > -1) {
        today = today.replace('-', '/');
    }

    return today
}

export default getTodayDateISO