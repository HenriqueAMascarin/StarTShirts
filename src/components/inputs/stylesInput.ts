import { appColors } from '@App/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesInput = StyleSheet.create({
    defaultInput: {
        borderWidth: 1,
        borderColor: appColors.black,
        borderRadius: 12,
        height: 40
    }, 
    label: {
        paddingLeft: 5,
        fontSize: 18
    },
    passwordContainer:{
        position: 'relative', 
        display:"flex", 
        alignItems: "stretch", 
    },
    textsContainer: {
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    error: {
        paddingLeft: 5,
        color: appColors.red,
        alignSelf: 'flex-start',
        flex: 1,
    },
    forgotPasswordText:{
        color: appColors.blue,
        alignSelf: 'flex-end',
        flex: 1,
    }
});
