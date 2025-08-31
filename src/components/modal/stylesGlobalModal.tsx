import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesGlobalModal = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: appColors.transparent,
    width: '100%',
    zIndex: 999,
  },
  modalContainerShadow: {
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
  backgroundTouchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  bottomLine: {
    borderBottomWidth: 1.2,
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
    paddingVertical: 5,
  },
});
