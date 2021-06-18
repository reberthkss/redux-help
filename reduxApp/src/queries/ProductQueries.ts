class ProductQueries {
    getProductsByDepartment: string = `
        query ProductsByDepartment($categoryId: ID!, $nextPage: String, $limit: Int!) {
              getTendaAtacadoDepartment(id: $categoryId) {
                    products(nextToken: $nextPage, limit: $limit) {
                          items {
                              categoryId
                              id
                              name
                              price
                              thumbnail
                          }
                          nextToken
                    }
              }
        }
    `
}

export default ProductQueries;
