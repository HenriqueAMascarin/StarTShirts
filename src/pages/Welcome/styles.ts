import { appColors } from '@App/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerInputs: {
        gap: 5,
        marginBottom: 20
    }, 
    forgotPasswordText:{
        color: appColors.blue,
        alignSelf: 'flex-end'
    }
});
