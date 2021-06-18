import IProduct from "../datamodels/IProduct";

class ProductData implements IProduct{
    id: string | null = null;
    name: string | null = null;
    thumbnail: string | null = null;
    price: number | null = null;
    constructor(id: string, name: string, thumbnail: string, price: number) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.price = price;
    }
}

export default ProductData;
