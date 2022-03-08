function getTodayDateISO(): string {
    let today =  new Date().toISOString().split('T')[0];
    while(today.indexOf('-') > -1) {
        today = today.replace('-', '/');
    }

    return today
}

export default getTodayDateISO