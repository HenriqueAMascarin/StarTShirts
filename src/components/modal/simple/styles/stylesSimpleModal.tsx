import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSimpleModal = StyleSheet.create({
  modalContainer: {
    display: 'flex',
    backgroundColor: appColors.white,
    position: 'relative',
    width: '100%',
    maxWidth: 340,
    height: 450,
    flexGrow: 1,
    zIndex: 1,
    borderRadius: 20,
    padding: 10,
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10,
  },
});
