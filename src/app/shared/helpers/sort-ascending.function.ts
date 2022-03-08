function sortAscending<T>(data: T[], property: keyof T): T[] {
    return data.sort((a, b) => `${a[property]}`.toLowerCase() < `${b[property]}`.toLowerCase() ? -1 : 1);
}

export default sortAscending