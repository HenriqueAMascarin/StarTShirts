import {
  NativeModules,
  SafeAreaView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { globalStore } from '@src/store/globalStore';
import AppRoutes, { RootStackParamList } from '@src/routes/AppRoutes';

import { GeneratorAlert } from '@src/components/alert/GeneratorAlert';
import { getLoggedUser } from '@src/services/user/login/methods/getLoggedUser';

const { SplashScreenModule } = NativeModules;

async function getBootData() {
  const loggedUserData = await getLoggedUser();

  let initialRoute: keyof RootStackParamList = 'register';

  if (loggedUserData) {
    if (loggedUserData.rememberMe) {
      initialRoute = 'home';
    } else {
      initialRoute = 'login';
    }
  }

  return { loggedUserData: loggedUserData, initialRoute };
}

function App() {

  const [bootStateData, changeBootStateData] = useState<Awaited<ReturnType<typeof getBootData>> | null>(null);

  useEffect(() => {
    if (!bootStateData) {
      (async () => {
        const bootData = await getBootData();
        changeBootStateData(bootData);
      })();
    } else {
      SplashScreenModule.changeActiveSplashScreen(false);
    }
  }, [bootStateData]);

  return (
    <Provider store={globalStore}>
      {bootStateData &&
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <GeneratorAlert />

          <AppRoutes initialRouteName={bootStateData.initialRoute} />
        </SafeAreaView>
      }
    </Provider>
  );
}

export default App;
