/*Imports*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import PagesStack from './src/navigation/AppStack';

/*App*/
function App() {
  return (
    <NavigationContainer>
      <PagesStack />
      
    </NavigationContainer>
  );
}

export default App;