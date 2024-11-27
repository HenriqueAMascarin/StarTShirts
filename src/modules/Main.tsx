import AppRoutes from '@src/routes/app.routes';
import {
    SafeAreaView,
    View,
} from 'react-native';
import React from 'react';

import { useAppSelector } from '@src/store/reduxHookCustom';


export default function Main() {

    const instantiableElements = useAppSelector(({ instantiableElements }) => instantiableElements);

    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            {instantiableElements.map(({ Element, props }, itemKey) => {


                return (<Element {...props} key={itemKey} />)
            })}
            <AppRoutes />
        </SafeAreaView>
    );
}
