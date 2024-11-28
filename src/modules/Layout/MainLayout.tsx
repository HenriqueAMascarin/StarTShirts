import AppRoutes from '@src/routes/app.routes';
import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { styles } from '@src/modules/Layout/styles';

export default function MainLayout() {
    const instantiableElements = useAppSelector(({ instantiableElements }) => instantiableElements);

    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            <View style={styles.containerInstantiables}>
                {instantiableElements.map(({ Element, props }, itemKey) => {
                    return (<Element {...props} key={itemKey} />)
                })}
            </View>

            <AppRoutes />
        </SafeAreaView>
    );
}
