import AppRoutes from '@src/routes/app.routes';
import { SafeAreaView, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { styles } from '@src/modules/Layout/styles';
import { removeElement } from '@src/store/features/instantiableElements/instantiableElements-slice';
import { useDispatch } from 'react-redux';

export default function MainLayout() {
    const instantiableElements = useAppSelector(({ instantiableElements }) => instantiableElements);
    const dispatch = useDispatch();

    function hideFunction(index: number) {
        dispatch(removeElement(index));
    }

    useEffect(() => {
        console.log(instantiableElements)
    }, [instantiableElements])

    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            <View style={styles.containerInstantiables}>
                {instantiableElements.map(({ Element, props }, itemKey) => {

                    return (<Element key={itemKey} onHideFn={() => hideFunction(itemKey)} {...props} />)
                })}
            </View>

            <AppRoutes />
        </SafeAreaView>
    );
}
