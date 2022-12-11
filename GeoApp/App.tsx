/*Imports*/
import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';


//Cambiar AuthStack por AppStack para ver el Home y lo demás
import AuthStack from './src/navigation/RouteStack';


/*App*/
function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}

export default App;
