
import ProductData from "../dataclasses/ProductData";
import ProductService from "../service/ProductService";
import IProductsDataPage from "../datamodels/IProductsDataPage";
import ProductsDataPage from "../dataclasses/ProductsDataPage";

class ProductRepository {
    private productService = new ProductService();
    async loadProductsByCategoryId(categoryId: string, nextPage: string | null, limit: number): Promise<ProductsDataPage> {
        const productsRawData: IProductsDataPage =  await this.productService.getProductsByCategoryId(categoryId, nextPage, limit);
        const productsDataList: ProductData[] = [];
        const nextToken = productsRawData.nextToken;
        if (productsRawData.products) {
            productsRawData.products
                .forEach(({id, name, price, thumbnail}) => {
                    if (id && name && price && thumbnail)  {
                        const product = new ProductData(id, name, thumbnail, price);
                        productsDataList.push(product);
                    } else {
                        throw new Error(`Product invalid! => id = ${id}, name = ${name}, price = ${price}, thumbnail = ${thumbnail}, nextToken = ${nextToken}`);
                    }
                });
        }
        return new ProductsDataPage(categoryId, productsDataList, nextToken);
    }

    async loadProductsThatMatchText(categoryId: string, nextPage: string | null, limit: number, text: string): Promise<ProductsDataPage> {
        const productsRawData: IProductsDataPage =  await this.productService.getProductsThatMatchText(categoryId, nextPage, limit, text);
        const productsDataList: ProductData[] = [];
        const nextToken = productsRawData.nextToken;
        if (productsRawData.products) {
            productsRawData.products
                .forEach(({id, name, price, thumbnail}) => {
                    if (id && name && price && thumbnail)  {
                        const product = new ProductData(id, name, thumbnail, price);
                        productsDataList.push(product);
                    } else {
                        throw new Error(`Product invalid! => id = ${id}, name = ${name}, price = ${price}, thumbnail = ${thumbnail}, nextToken = ${nextToken}`);
                    }
                });
        }
        return new ProductsDataPage(categoryId, productsDataList, nextToken);
    }
}

export default ProductRepository;
