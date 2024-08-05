import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Routes from './src/routes/index.tsx';
import Welcome from './src/screens/welcome/index.tsx';
import StackNavigator from './src/routes/StackRoutes.tsx';
import { theme } from './src/theme/fonts.ts';

function App(): React.JSX.Element {
  return (
        <Routes/>
  );
}

export default App;
