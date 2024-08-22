import React, { useEffect } from 'react';
// @ts-ignore
import { Text, View, Button } from 'react-native';
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
            <Text> abcd</Text>
            <Button
                title="Increase"
                color="red"
            />
        </View >
    )
}

export default HomeScreen;
