import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Routes from './src/routes/index.tsx';
import Welcome from './src/screens/welcome/index.tsx';
import StackNavigator from './src/routes/StackRoutes.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Routes/>
    </SafeAreaView>
  );
}

export default App;
