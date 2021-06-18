import IProductsDataPage from "../datamodels/IProductsDataPage";
import ProductData from "./ProductData";

class ProductsDataPage implements IProductsDataPage{
    categoryId?: string | null = null;
    nextToken: string | null = null;
    products: ProductData[];
    constructor(categoryId: string, products: ProductData[], nextPage: string | null = null) {
        this.categoryId = categoryId;
        this.products = products;
        this.nextToken = nextPage;
    }
}

export default ProductsDataPage;
