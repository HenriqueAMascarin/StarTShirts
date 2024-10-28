import AppRoutes from '@App/routes/app.routes';
import React from 'react';

import {
  SafeAreaView,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppRoutes/>
    </SafeAreaView>
  );
}

export default App;
