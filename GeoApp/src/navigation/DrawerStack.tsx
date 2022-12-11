/*Imports*/
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';

/*Pages (Views)*/
import  Home  from '../pages/Home';
import  Profile  from '../pages/Profile';
import  About from '../pages/About';

/*Pages Stack*/
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true, //false para esconder barra superior
        drawerActiveBackgroundColor: '#E3E3E3',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mi Perfil"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Acerca de"
        component={About}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="leaf-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;