type ValidatorReturn<T extends number | string> = {
    [key in T]: any
} | null

export default ValidatorReturn