/*Imports*/
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages (Views)*/
import Login from '../pages/Login';
import Register from '../pages/Register';
import DrawerStack from './DrawerStack';

/*Pages Stack*/
const Stack = createNativeStackNavigator();

const RouterStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Ingreso' component={Login}/>
          <Stack.Screen name='Registro' component={Register}/>
          <Stack.Screen name='Mapa' component={DrawerStack}/>
          <Stack.Screen name='Perfil' component={DrawerStack}/>
          <Stack.Screen name='Otros' component={DrawerStack}/>
        </Stack.Navigator>
    )
}

export default RouterStack;