import { View } from "react-native";
import { useAppSelector } from '@src/store/reduxHookCustom';
import { removeElement, typeElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { useDispatch } from 'react-redux';
import { useMemo } from "react";
import { stylesGeneratorAlert } from "@src/modules/Alert/stylesGeneratorAlert";

export function GeneratorAlert() {
    const alertsInstantiable = useAppSelector(({ alertsInstantiable }) => alertsInstantiable);
    const dispatch = useDispatch();

    function hideFunction(instantiable: typeElement) {
        dispatch(removeElement(instantiable));
    }

    const alertsElements = useMemo(() => {
        return alertsInstantiable.map((instantiable) => {

            return (<instantiable.Element onHideFn={() => hideFunction(instantiable)} key={instantiable.keyItem} {...instantiable.props} />)
        })
    }, [alertsInstantiable])

    return (
        <View style={stylesGeneratorAlert.containerAlerts} >
            {alertsElements}
        </View >
    )
}