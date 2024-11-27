import {
  NativeModules,
} from 'react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { globalStore } from '@src/store/globalStore';
import Main from '@src/modules/Main';

const { SplashScreenModule } = NativeModules;

function App() {

  useEffect(() => {
    SplashScreenModule.changeActiveSplashScreen(false);
  }, [])

  return (
    <Provider store={globalStore}>
      <Main />
    </Provider>
  );
}

export default App;
