import DepartmentService from "../service/DepartmentService";
import IDepartment from "../datamodels/IDepartment";
import GetDepartments from "../dataclasses/GetDepartments";
import DepartmentData from "../dataclasses/DepartmentData";

class DepartmentRepository {
    private departmentService = new DepartmentService();
    async loadDepartmentById(departmentId: string): Promise<IDepartment> {
        const {id, name, link} = await this.departmentService.getDepartment(departmentId);
        if (!id || !name || !link) throw new Error(`Department invalid! => id = ${id}, name = ${name}, link = ${link}`);
        const departmentDetail: IDepartment = new DepartmentData(id, name, link);
        return departmentDetail;
    }

    async loadDepartments(nextPage: string | null = null): Promise<GetDepartments> {
        const {departments, nextToken} = await this.departmentService.getDepartments(nextPage);
        const listOfDepartments: DepartmentData[] = [];
        departments
            ?.forEach(({id, link, name}) => {
                const departmentData = new DepartmentData(id, link, name);
                listOfDepartments.push(departmentData);
            });
        return new GetDepartments(listOfDepartments, nextToken as string | null);
    }
}

export default DepartmentRepository;
