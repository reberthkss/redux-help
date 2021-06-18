import IDepartment from "./IDepartment";

interface IGetDepartments {
    departments?: IDepartment[]
    nextToken?: string | null
}

export default IGetDepartments;
