import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity, Image,
} from "react-native";
import {useDispatch} from 'react-redux';
import React, {useEffect} from "react";
import IProduct from "../datamodels/IProduct";
import DepartmentData from "../dataclasses/DepartmentData";
import FastImage from "react-native-fast-image";
import {loadProductByDepartmentId, selectProductsByDepartmentId} from "../redux/DepartmentSlice";
import { addProductToCart } from "../redux/CartSlice";
import {useAppSelector} from "../redux/ConfigureStore";

const ITEM_HEIGHT = 220;

const renderProductCard = (product: IProduct, onPressed: (id: string | null, productPrice: number | null) => Promise<void>) => {
    return (
        <TouchableOpacity style={[styles.productCardContainer]} onPress={async () => onPressed(product.id || null, product.price as number | null)}>
            <FastImage
                style={styles.productCardThumbnail}
                resizeMode={FastImage.resizeMode.cover}
                source={{
                    uri: product.thumbnail!!,
                    priority: FastImage.priority.high
                }}
            />
            <Text style={[styles.productCardTextName]}>
                {product.name}
            </Text>
        </TouchableOpacity>
    )
}

interface CategoryProductsHorizontalListProps {
    department: DepartmentData
}

const LIMIT_OF_PRODUCTS = 10;
const CategoryProductsHorizontalList: React.FC<CategoryProductsHorizontalListProps> = ({department}) => {
    const products: IProduct[] = useAppSelector((state) => selectProductsByDepartmentId(state.departments.product, department.id || "", LIMIT_OF_PRODUCTS));
    const dispatch = useDispatch();

    useEffect(() => {
        if (department) {
            dispatch(loadProductByDepartmentId({departmentId: department.id!!, limit: LIMIT_OF_PRODUCTS, nextPage: null}));
        }
    }, [department]);

    return (
        <View style={[styles.root]}>
            <View style={[styles.headerContainer]}>
                <Text>
                    {department.name}
                </Text>
            </View>
            <View style={[{display: "flex", flexDirection: "row"}]}>
                <FlatList
                data={products}
                renderItem={({item}) => renderProductCard(item, async (productId, productPrice) => {
                    if (productId) {
                        if (department.id) {
                            dispatch(addProductToCart({id: productId, quantity: 1, departmentId: department.id, unitPrice: productPrice}));
                        } else {
                        }
                    }
                })}
                horizontal={true}
                keyExtractor={(product) => (product.id || Math.random()) + (product.name || (Math.random() * 10).toString())}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {height: ITEM_HEIGHT, display: "flex", flexDirection: "column"},
    productCardContainer: {height: 170, width: 125, display: "flex", borderRadius: 5, elevation: 2, marginHorizontal: 5, padding: 5, backgroundColor: "white"},
    productCardThumbnail: {flex: 1},
    productCardTextName: {textAlign: "center"},
    headerContainer: {display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 10},
    seeMoreContainer: {display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}
})

export default CategoryProductsHorizontalList;
