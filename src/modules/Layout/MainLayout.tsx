import AppRoutes from '@src/routes/app.routes';
import { SafeAreaView, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { styles } from '@src/modules/Layout/styles';
import { removeElement, typeElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { useDispatch } from 'react-redux';

export default function MainLayout() {
    const alertsInstantiable = useAppSelector(({ alertsInstantiable }) => alertsInstantiable);
    const dispatch = useDispatch();

    function hideFunction(instantiable: typeElement) {
        dispatch(removeElement(instantiable));
    }

    useEffect(() => {
        console.log(alertsInstantiable)
    }, [alertsInstantiable])

    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            <View style={styles.containerInstantiables}>
                {alertsInstantiable.map((instantiable) => {

                    return (<instantiable.Element onHideFn={() => hideFunction(instantiable)} key={instantiable.keyItem} {...instantiable.props} />)
                })}
            </View>

            <AppRoutes />
        </SafeAreaView>
    );
}
