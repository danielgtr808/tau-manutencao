type Result<S, F extends string> = { success: true, result: S } | { success: false, errorMessage: F }

export default Result