import {ICartProduct} from "../datamodels/IStateReducer";

export default class ProductCart implements ICartProduct {
    constructor(productId: string, categoryId: string, categoryName: string, qty: number, unitPrice: number) {
        this.id = productId;
        this.departmentId = categoryId
        this.departmentName = categoryName
        this.quantity = qty;
        this.unitPrice = unitPrice;
    }
    id: string
    departmentId: string
    departmentName: string
    quantity: number
    unitPrice: number
}
