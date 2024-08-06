import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Routes from './src/routes/index.tsx';
import Welcome from './src/screens/welcome/index.tsx';
import StackNavigator from './src/routes/StackRoutes.tsx';
import { theme } from './src/theme/fonts.ts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.backgroundPrincipal}}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundPrincipal} />
      <Routes/>
    </SafeAreaView>
  );
}

export default App;
