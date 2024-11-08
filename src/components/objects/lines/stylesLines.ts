import { appColors } from '@App/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesLines = StyleSheet.create({
    container:{
        position:'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    line: {
        height: 2,
        backgroundColor: appColors.gray,
        alignSelf: 'stretch',
    }, 
    text: {
        fontSize: 16,
        color: appColors.black,
        backgroundColor: appColors.white,
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: 10
        
    },
});
