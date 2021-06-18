import {
    createEntityAdapter,
    createSlice,
    EntityState,
    PayloadAction,
    SliceCaseReducers
} from "@reduxjs/toolkit";
import {normalize, schema} from "normalizr";
import {ICartProduct} from "../datamodels/IStateReducer";
import {RootState} from "./ConfigureStore";
interface ICartAction {
    productId: string,
    price: number
}
interface ICartSlice extends EntityState<ICartProduct>{
    total: number // Action to update Cart total price is dispatched from Cart Navigator
}
interface IRemoveProductFromTheCart extends ICartAction {}
interface IIncreaseProductQtyInTheCart extends ICartAction {}
interface IDecreaseProductQtyInTheCart extends ICartAction {}
const cartProductEntity = new schema.Entity("product");
const CartAdapter = createEntityAdapter<ICartProduct>();
const CartSlice = createSlice<ICartSlice, SliceCaseReducers<ICartSlice>, "cart">(
    {
        name: "cart",
        initialState: {...CartAdapter.getInitialState(), total: 0},
        reducers: {
            addProductToCart: (state, {payload}: PayloadAction<ICartProduct>) => {
                CartAdapter.upsertOne(state, payload)
            },
            removeProductFromTheCart: (state, {payload}: PayloadAction<IRemoveProductFromTheCart>) => {
                CartAdapter.removeOne(state, payload.productId)
            },
            increaseProductQtyInTheCart: (state, {payload}: PayloadAction<IIncreaseProductQtyInTheCart>) => {
                const productEntity = state.entities[payload.productId];
                if (productEntity) {
                    productEntity.quantity++;
                }
            },
            decreaseProductQtyInTheCart: (state, {payload}: PayloadAction<IDecreaseProductQtyInTheCart>) => {
                const productEntity = state.entities[payload.productId];
                if (productEntity) {
                    productEntity.quantity--;
                }
            },
            recalculateCartTotal: (state) => {
                state.total = 0;
                Object
                    .values(state.entities)
                    .forEach((product) => {
                        if (product) {
                            state.total += product.quantity * product.unitPrice;
                        }
                    })
            }
        },
        extraReducers: (builder) => {

        }
    }
);

export const {
    addProductToCart,
    increaseProductQtyInTheCart,
    decreaseProductQtyInTheCart,
    recalculateCartTotal,
    removeProductFromTheCart
} = CartSlice.actions;
export const selectTotalPriceInTheCart = (state: RootState) => state.cart.total;
export const {
    selectAll: getAllProductsInTheCart,
    selectById: getProductInTheCartById,
    selectEntities: getCartProductsDict,
    selectIds: getAllIds,
    selectTotal: getProductsInCartCount
} = CartAdapter.getSelectors((state: RootState) => state.cart)
export default CartSlice.reducer;
