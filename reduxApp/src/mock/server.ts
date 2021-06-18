import { createServer } from "miragejs"
import GetProductsByDepartmentId from "./GetProductsByDepartmentId";
import AllDepartments from "./GetAllDepartments";

createServer({
    routes() {
        this.namespace = "api"

        this.get("/getAllDepartments", () => {
            return AllDepartments;
        },
            {timing: 1000})

        this.get("/productByDepartment/:id", (schema, request) => {
            const id = request.params.id;
                return GetProductsByDepartmentId(id);
            },
            {timing: 1000})
    },
})
