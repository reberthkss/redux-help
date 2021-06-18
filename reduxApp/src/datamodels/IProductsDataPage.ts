import IProduct from "./IProduct";

interface IProductsDataPage {
    products: IProduct[]
    nextToken: string | null
}

export default IProductsDataPage;
