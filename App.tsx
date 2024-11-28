import {
  NativeModules,
} from 'react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { globalStore } from '@src/store/globalStore';
import MainLayout from '@src/modules/Layout/MainLayout';

const { SplashScreenModule } = NativeModules;

function App() {

  useEffect(() => {
    SplashScreenModule.changeActiveSplashScreen(false);
  }, [])

  return (
    <Provider store={globalStore}>
      <MainLayout />
    </Provider>
  );
}

export default App;
