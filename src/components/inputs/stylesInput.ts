import { appColors } from '@App/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesInput = StyleSheet.create({
    defaultInput: {
        borderWidth: 1,
        borderColor: appColors.black,
        borderRadius: 10,
    }, 
    label: {
        paddingLeft: 5,
        fontSize: 18
    },
    error: {
        paddingLeft: 5,
        color: appColors.red
    },
});
