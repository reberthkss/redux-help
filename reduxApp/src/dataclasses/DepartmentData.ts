import IDepartment from "../datamodels/IDepartment";

class DepartmentData implements IDepartment{
    id: string | null = null;
    link: string | null = null;
    name: string | null = null;
    constructor(id: string | null, link: string | null, name: string | null) {
        this.id = id;
        this.link = link;
        this.name = name;
    }
}

export default DepartmentData;
