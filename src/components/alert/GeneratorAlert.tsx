import { View } from 'react-native';
import { useAppSelector } from '@src/store/reduxHookCustom';
import { removeElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { stylesGeneratorAlert } from '@src/components/alert/stylesGeneratorAlert';
import React from 'react';
import { AlertItem } from '@src/components/alert/components/AlertItem/AlertItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function GeneratorAlert() {
  const alertsInstantiable = useAppSelector(({ alertsInstantiable }) => alertsInstantiable);

  const dispatch = useDispatch();

  const insets = useSafeAreaInsets();

  function hideFunction(keyItem: number) {
    dispatch(removeElement(keyItem));
  }

  const alertsElements = useMemo(() => {
    return alertsInstantiable.map(({ keyItem, props }) => {
      return <AlertItem onHideFn={() => hideFunction(keyItem)} key={keyItem} {...props} />;
    });
  }, [alertsInstantiable]);

  const topPositionValue = useMemo(
    () => insets.top + stylesGeneratorAlert.containerAlerts.top,
    [insets.top],
  );

  return (
    <View style={[stylesGeneratorAlert.containerAlerts, { top: topPositionValue }]}>
      {alertsElements}
    </View>
  );
}
