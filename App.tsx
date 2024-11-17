import AppRoutes from '@App/routes/app.routes';
import {
  NativeModules,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';

const { SplashScreenModule } = NativeModules;

function App(): React.JSX.Element {

  useEffect(() => { 
    SplashScreenModule.changeActiveSplashScreen(false)
    console.log('hello')
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppRoutes />
    </SafeAreaView>
  );
}

export default App;
