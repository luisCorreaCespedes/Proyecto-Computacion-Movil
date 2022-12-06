/*Imports*/
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages (Views)*/
import { Login } from '../pages/Login';

/*Pages Stack*/
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    )
}

export default AuthStack;