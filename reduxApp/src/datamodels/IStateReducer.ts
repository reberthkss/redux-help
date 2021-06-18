import IProduct from "./IProduct";

export interface ICartProduct {
    id: string,
    departmentId: string,
    quantity: number,
    unitPrice: number
}

export interface ICategoryData {
    name: string,
    products: IProduct[]
}

export interface ICategoryID {
    id: number,
    name: string
}
export interface IStateReducer {
    nextLoadTimestamp: number | null,
    cartProducts: ICartProduct[],
    categoriesData: ICategoryData[],
    categoriesId: ICategoryID[]
}
