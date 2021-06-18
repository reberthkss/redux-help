class DepartmentQueries {
    getAllDepartments: string = `
        query getAllDepartments($nextPage: String) {
              listTendaAtacadoDepartments(nextToken: $nextPage) {
                    items {
                          id
                          link
                          name
                          countProducts
                    }
              }
        }
    `
}

export default DepartmentQueries;
