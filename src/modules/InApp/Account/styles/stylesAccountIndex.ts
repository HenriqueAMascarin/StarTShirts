import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesAccountIndex = StyleSheet.create({
  containerUserPicture: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginTop: 30,
    marginBottom: 30
  },
  containersInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 2,
  },
  containerSecurity:{
    marginBottom: 50
  }
});
