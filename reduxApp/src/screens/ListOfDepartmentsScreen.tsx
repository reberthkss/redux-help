import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import * as React from "react"
import {useEffect, useState} from "react"
import {StackScreenProps} from "@react-navigation/stack";
import IDepartment from "../datamodels/IDepartment";
import {useAppDispatch, useAppSelector} from "../redux/ConfigureStore";
import ThunkStatus from "../util/ThunkStatus";
import {selectDepartmentStatus, getAllDepartments, loadAllDepartments} from "../redux/DepartmentSlice";
import DepartmentData from "../dataclasses/DepartmentData";
import CategoryProductsHorizontalList from "../components/CategoryProductsHorizontalList";

interface ListOfDepartmentsScreenProps {}

const ListOfDepartmentsScreen = () => {
    /* Redux Selectors*/
    const departments: IDepartment[] = useAppSelector(getAllDepartments);
    const departmentReducerStatus: ThunkStatus = useAppSelector(selectDepartmentStatus) as ThunkStatus;
    /* Dispatchers */
    const dispatch = useAppDispatch();
    /* Render logic */
    const renderCategoryList = (departments: DepartmentData[]) => {
        return departments
            .map((department) => {
                return (
                    <CategoryProductsHorizontalList
                        key={department.link}
                        department={department}
                    />
                )
            })
    }
    const renderContent = (departments: DepartmentData[]) => {
        return  (
            <SafeAreaView>
                <ScrollView style={[styles.root]}>
                    {renderCategoryList(departments)}
                </ScrollView>
            </SafeAreaView>
        )
    }
    const renderLoading = () => {
        return (
            <View style={[{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}]}>
                <ActivityIndicator size={"large"} color={"blue"}/>
            </View>
        )
    }
    useEffect(() => {
        dispatch(loadAllDepartments(null));
    }, []);

    if (departmentReducerStatus == ThunkStatus.pending) {
        return renderLoading();
    } else {
        return renderContent(departments || []);
    }
}

const styles = StyleSheet.create({
    root: {display: "flex", flexDirection: "column"}
})

export default ListOfDepartmentsScreen;
