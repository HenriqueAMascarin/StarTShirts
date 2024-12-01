import AppRoutes from '@src/routes/app.routes';
import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { styles } from '@src/modules/Layout/styles';
import { filterElement, typeElement } from '@src/store/features/instantiableElements/instantiableElements-slice';
import { useDispatch } from 'react-redux';

export default function MainLayout() {
    const instantiableElements = useAppSelector(({ instantiableElements }) => instantiableElements);
    const dispatch = useDispatch();

    function hideFunction(element: typeElement) {
        dispatch(filterElement(element));
    }

    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            <View style={styles.containerInstantiables}>
                {instantiableElements.map(({ Element, props }, itemKey) => {

                    return (<Element duration={props.duration} key={itemKey} onHideFn={hideFunction} />)
                })}
            </View>

            <AppRoutes />
        </SafeAreaView>
    );
}
