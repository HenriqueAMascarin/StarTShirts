import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesGlobalModal = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: appColors.transparent,
    },
    backgroundTouchable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    bottomLine: {
        borderBottomWidth: 1.5,
        borderColor: appColors.gray,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paddingContainer: {
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
});
