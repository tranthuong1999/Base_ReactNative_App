import React, { useEffect } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { listCategory } from '../../redux/slices/category.slice';

const HomeScreen = () => {

    const { listCategories } = useAppSelector((state) => state.categoryReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listCategory())
    }, [])

    console.log("listCategories", listCategories)

    return (
        <View>
            <Text> Hello world</Text>
            <Text> Hello world</Text>
            <Text> Hello world</Text>
            <Text> Hello world</Text>
            <Text> Hello world</Text>
            <Text> Hello world</Text>
        </View>
    )
}

export default HomeScreen;


