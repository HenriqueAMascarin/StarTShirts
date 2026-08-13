import { NativeModules, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { globalStore } from '@src/store/globalStore';
import AppRoutes, { RootStackParamList } from '@src/routes/AppRoutes';
import { GeneratorAlert } from '@src/components/alert/GeneratorAlert';
import { getLoggedUser } from '@src/services/user/login/methods/getLoggedUser';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { keysLocalStorage } from '@src/utils/localStorage';
import { getVersion } from 'react-native-device-info';

const { SplashScreenModule } = NativeModules;

async function clearAllDataAfterImportantUpdate() {
  const localStorageKeyVersion = 'versionApp';

  const localStorageKeysValues = Object.values(keysLocalStorage);

  const currentAppVersion = getVersion();

  let versionAppLocalStorage = await AsyncStorage.getItem(localStorageKeyVersion);

  versionAppLocalStorage = versionAppLocalStorage ? JSON.parse(versionAppLocalStorage) : null;

  if (versionAppLocalStorage != currentAppVersion) {
    for (let keyValue of localStorageKeysValues) {
      await AsyncStorage.removeItem(keyValue);
    }
  }

  await AsyncStorage.setItem(localStorageKeyVersion, currentAppVersion);
}

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
  const [bootStateData, changeBootStateData] = useState<Awaited<
    ReturnType<typeof getBootData>
  > | null>(null);

  useEffect(() => {
    if (!bootStateData) {
      (async () => {
        await clearAllDataAfterImportantUpdate();

        const bootData = await getBootData();

        changeBootStateData(bootData);
      })();
    } else {
      SplashScreenModule.changeActiveSplashScreen(false);
    }
  }, [bootStateData]);

  return (
    <SafeAreaProvider>
      <Provider store={globalStore}>
        {bootStateData && (
          <View style={{ flex: 1, position: 'relative' }}>
            <GeneratorAlert />

            <AppRoutes initialRouteName={bootStateData?.initialRoute} />
          </View>
        )}
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
