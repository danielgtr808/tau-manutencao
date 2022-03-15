import Default from "../../default-behavior/default.model";

interface Machine extends Default {    
    departmentName: string;
    familyName: string;
    familyPrefix: string;
    id: string;
    image: string;
    name: string;
}

export default Machine