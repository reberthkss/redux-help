import {API, graphqlOperation} from "aws-amplify";
import IDepartment from "../datamodels/IDepartment";
import IGetDepartments from "../datamodels/IGetDepartments";
import DepartmentQueries from "../queries/DepartmentQueries";

class DepartmentService {
    private queries: DepartmentQueries = new DepartmentQueries();
    async getDepartments(nextPage: string | null): Promise<IGetDepartments> {
        // const response = await API.graphql(graphqlOperation(this.queries.getAllDepartments, {nextPage}));
        const response = await fetch("/api/getAllDepartments");
        const responseJson = await response.json();
        // @ts-ignore
        const departments = responseJson["data"]["listTendaAtacadoDepartments"]["items"] || [];
        // @ts-ignore
        const nextToken = responseJson["data"]["listTendaAtacadoDepartments"]["nextToken"];
        return {departments, nextToken};
    }
}

export default DepartmentService;
