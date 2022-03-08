import Department from "src/app/backend/departments/department.model";
import Sector from "src/app/backend/sectors/sector.model";

class SectorPage {

    public sectorName: string;
    public departmentName: string;

    constructor(public sector: Sector, public departments: Department[]) {
        this.sectorName = sector.name;
        this.departmentName = departments.find(x => x.id === sector.departmentId)?.name ?? "";
    }

}

export default SectorPage