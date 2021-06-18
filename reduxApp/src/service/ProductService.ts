import { API, graphqlOperation } from "aws-amplify";
import IProductsDataPage from "../datamodels/IProductsDataPage";
import ProductQueries from "../queries/ProductQueries";
import IProduct from "../datamodels/IProduct";

class ProductService {
    private queries: ProductQueries = new ProductQueries();
    async getProductsByCategoryId(categoryId: string, nextPage: string | null, limit: number): Promise<IProductsDataPage> {
        // const response = await API.graphql(graphqlOperation(this.queries.getProductsByDepartment, {categoryId, nextPage, limit}));
        const response = await fetch(`/api/productByDepartment/${categoryId}`);
        const responseJson = await response.json();
        // @ts-ignore
        const products: IProduct[] = responseJson["data"]["getTendaAtacadoDepartment"]["products"]["items"];
        // @ts-ignore
        const nextToken: string | null = responseJson["data"]["getTendaAtacadoDepartment"]["products"]["nextToken"];
        return {products, nextToken};
    }
}

export default ProductService;
