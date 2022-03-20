/**
 * É um tipo usado na implementação do que é conhecido por "Exhaustive Type Checking". Você pode
 * saber mais sobre lendo este artigo:
 * 
 * https://blog.logrocket.com/improve-error-handling-typescript-exhaustive-type-checking/
 * 
 */
type Result<S, F extends string> = { success: true, result: S } | { success: false, errorMessage: F }

export default Result