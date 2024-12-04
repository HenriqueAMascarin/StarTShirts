import {
  NativeModules,
} from 'react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { globalStore } from '@src/store/globalStore';
import AppRoutes from '@src/routes/app.routes';
import { SafeAreaView } from 'react-native';
import { GeneratorAlert } from '@src/modules/Alert/GeneratorAlert';

const { SplashScreenModule } = NativeModules;

function App() {

  useEffect(() => {
    SplashScreenModule.changeActiveSplashScreen(false);
  }, [])

  return (
    <Provider store={globalStore}>
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
            <GeneratorAlert />

            <AppRoutes />
        </SafeAreaView>
    </Provider>
  );
}

export default App;
