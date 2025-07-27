import { View } from 'react-native';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { removeElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { stylesGeneratorAlert } from '@src/components/alert/stylesGeneratorAlert';
import React from 'react';

export function GeneratorAlert() {
    const alertsInstantiable = useAppSelector(({ alertsInstantiable }) => alertsInstantiable);
    const dispatch = useDispatch();

    function hideFunction(keyItem: number) {
        dispatch(removeElement(keyItem));
    }

    const alertsElements = useMemo(() => {


        return alertsInstantiable.map(({ Element, keyItem, props }) => {

            return (
                <Element
                    onHideFn={() => hideFunction(keyItem)}
                    key={keyItem}
                    {...props}
                />
            );
        });
    }, [alertsInstantiable]);

    return (
        <View style={stylesGeneratorAlert.containerAlerts} >
            {alertsElements}
        </View >
    );
}
