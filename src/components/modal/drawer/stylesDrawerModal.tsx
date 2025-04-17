import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const drawerModalWidth = 260;

export const stylesDrawerModal = StyleSheet.create({
    drawerContainer: {
        display: 'flex',
        backgroundColor: appColors.white,
        maxWidth: drawerModalWidth,
        flexGrow: 1,
        alignSelf: 'stretch',
        zIndex: 1,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
