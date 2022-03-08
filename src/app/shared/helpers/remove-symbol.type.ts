type RemoveSymbol<T> = {[key in keyof T]: key extends symbol ? never : key}[keyof T]

export default RemoveSymbol