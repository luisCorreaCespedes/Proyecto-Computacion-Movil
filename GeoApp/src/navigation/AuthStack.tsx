/*Imports*/
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages (Views)*/
import Login from '../pages/Login';
import Register from '../pages/Register';

/*Pages Stack*/
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Inicio' component={Login}/>
          <Stack.Screen name='Registro' component={Register}/>
        </Stack.Navigator>
    )
}

export default AuthStack;