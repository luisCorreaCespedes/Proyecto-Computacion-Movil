/*Imports*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

/*App*/
function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      
    </NavigationContainer>
  );
}

export default App;