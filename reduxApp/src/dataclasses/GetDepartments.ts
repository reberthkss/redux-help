import IGetDepartments from "../datamodels/IGetDepartments";
import DepartmentData from "./DepartmentData";

class GetDepartments implements IGetDepartments{
    departments: DepartmentData[] = [];
    nextToken: string | null = null
    constructor(departments: DepartmentData[], nextPage: string | null) {
        this.departments = departments;
        this.nextToken = nextPage;
    }
}

export default GetDepartments;
