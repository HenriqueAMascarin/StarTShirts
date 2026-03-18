import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesAccountIndex = StyleSheet.create({
  containerUserPicture: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginTop: 30,
    marginBottom: 30,
  },
  containersFlexInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  containersInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerSecurity: {
    marginBottom: 70,
  },
  titleSection: {
    marginBottom: 2,
  },
});
