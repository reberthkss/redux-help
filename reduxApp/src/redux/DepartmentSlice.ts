import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {normalize, schema} from "normalizr";
import {Dictionary} from "../util/Types";
import IDepartment from "../datamodels/IDepartment";
import IProduct from "../datamodels/IProduct";
import ThunkStatus from "../util/ThunkStatus";
import DepartmentRepository from "../repository/DepartmentRepository";
import ProductRepository from "../repository/ProductRepository";
import {RootState} from "./ConfigureStore";

interface ILoadAllDepartmentsResponse {departments: Dictionary<IDepartment>, nextToken: string | null}
interface ILoadProductsByDepartmentIdResponse {ids: string[], products: Dictionary<IProduct>, nextToken: string | null, departmentId: string}
interface IProductEntityProps {
    departmentId: string
    products: EntityState<IProduct>
    status: ThunkStatus
}
interface IDepartmentState extends EntityState<IDepartment> {
    status: ThunkStatus,
    nextToken: string | null
}
interface IProductState extends EntityState<IProductEntityProps> {}
interface ILoadProductByDepartmentIDProps {
    departmentId: string,
    nextPage: string | null,
    limit: number
}
interface IDepartmentSliceState {
    department: IDepartmentState,
    product: IProductState
}
const DepartmentEntity = new schema.Entity("departments");
const ProductEntity = new schema.Entity("products");
const productRepository = new ProductRepository();
const departmentRepo = new DepartmentRepository();
const DepartmentAdapter = createEntityAdapter<IDepartment>();
const ProductAdapter = createEntityAdapter<IProductEntityProps>({
    selectId: (item) => item.departmentId
});
const initialState: IDepartmentSliceState = {
    department: {...DepartmentAdapter.getInitialState(), status: ThunkStatus.idle, nextToken: null},
    product: ProductAdapter.getInitialState(),
}
export const loadAllDepartments = createAsyncThunk(
    "department/loadAllDepartments",
    async function(nextPage: string | null = null): Promise<ILoadAllDepartmentsResponse | null> {
        try {
            const departmentsPage = await departmentRepo.loadDepartments(nextPage);
            const departmentsNormalized = normalize(departmentsPage.departments, [DepartmentEntity]);
            return {departments: departmentsNormalized.entities.departments as Dictionary<IDepartment>, nextToken: departmentsPage.nextToken};
        } catch (error) {
            return null;
        }
    });
export const loadProductByDepartmentId = createAsyncThunk(
    "department/loadProductsByDepartmentId",
    async function ({departmentId, nextPage, limit}: ILoadProductByDepartmentIDProps, thunkAPI): Promise<ILoadProductsByDepartmentIdResponse | null> {
        try {
            const productPage = await productRepository.loadProductsByCategoryId(departmentId, nextPage, limit);
            const normalizedProductPage = normalize(productPage.products, [ProductEntity]);
            return {ids: normalizedProductPage.result, products:  normalizedProductPage.entities.products as Dictionary<IProduct>, nextToken: productPage.nextToken, departmentId};
        } catch (error) {
            return null;
        }
    }
)
const DepartmentSlice = createSlice<IDepartmentSliceState, any, any>({
    name: "department",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Load All Departments
        builder.addCase(loadAllDepartments.pending, (state, action) => {
            state.department.status = ThunkStatus.pending;
        });
        builder.addCase(loadAllDepartments.fulfilled, (state, {payload}) => {
            state.department.status = ThunkStatus.idle;
            if (payload) {
                DepartmentAdapter.upsertMany(state.department, payload.departments);
                state.department.nextToken = payload.nextToken;
            }
        });
        // Load Products by department ID
        builder.addCase(loadProductByDepartmentId.pending, (state, action) => {
            const departmentId: string = action.meta.arg.departmentId;
            if (departmentId) {
                const categoryAlreadyAdd = state.product?.ids.find((id) => id == departmentId) || false;
                if (categoryAlreadyAdd) {
                    state.product.entities[departmentId]!!.status = ThunkStatus.pending;
                } else {
                    ProductAdapter.upsertOne(state.product, {departmentId, products: {ids: [], entities: {}}, status: ThunkStatus.pending});
                }
            }
        });
        builder.addCase(loadProductByDepartmentId.fulfilled, (state, {payload}) => {
            if (payload) {
                const departmentId = payload.departmentId;
                const productByDepartmentState = state.product.entities[departmentId];
                const department = state.department.entities[departmentId];
                if (productByDepartmentState) {
                    productByDepartmentState.status = ThunkStatus.idle;
                    productByDepartmentState.products.ids = payload.ids;
                    productByDepartmentState.products.entities = payload.products
                    if (department) {
                        payload.ids.forEach((id) => {
                            if (department.products && department.products.find((productId: string) => productId == id) == undefined) {
                                department.products.push(id);
                            } else if (department.products == undefined) {
                                department.products = [id];
                            }
                        })
                    }
                }
            }
        });
    }
});
export const {
    selectAll: getAllDepartments,
    selectById: getDepartmentById,
    selectIds: getDepartmentIds,
    selectEntities: getAllDepartmentsDictionary,
    selectTotal: getDepartmentsCount
} = DepartmentAdapter.getSelectors((state: RootState) => state.departments.department);
export const selectDepartmentStatus = (state: RootState) => state.departments.department.status;
export const selectProductsByDepartmentId = (state: IProductState, departmentId: string, qty: number): IProduct[] => {
    if (state.entities[departmentId]?.products.entities) {
        return (Object.values(state.entities[departmentId]!!.products.entities)).splice(0, qty) as IProduct[];
    }
    return []
}
export const selectProductByDepartmentAndProductId = (state: IProductState, departmentId: string, productId: string): IProduct | null=> {
    if (state.entities[departmentId]?.products.entities) {
        return state.entities[departmentId]!!.products.entities[productId] as IProduct;
    } else {
        return null;
    }
}
export const {} = DepartmentSlice.actions;
export default DepartmentSlice.reducer;
