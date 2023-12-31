import React from 'react';
import { LogBox } from 'react-native';
import { MainNavigator } from './navigation';

function App(): JSX.Element {
  LogBox.ignoreLogs(['ViewPropTypes']);
  return <MainNavigator />;
}

export default App;
