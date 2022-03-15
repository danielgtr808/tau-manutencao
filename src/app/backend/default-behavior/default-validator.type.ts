import Result from "src/app/shared/helpers/result.type";
import Default from "./default.model";

type DefaultValidator<T extends Default> = (data: T, allData: T[]) => Result<undefined, string>

export default DefaultValidator