/*Imports*/
import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';

/*Pages (Views)*/
import  Home  from '../pages/Home';
import  Profile  from '../pages/Profile';
import  About from '../pages/About';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { readMarkerData, writeMarkerData } from '../firebase/database'
import ModalPicker from '../components/ModalComponent';


/*Pages Stack*/
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true, //false para esconder barra superior
        headerRight: () => (
          <TouchableOpacity style={{marginRight: 8}} onPress={() => {readMarkerData()}}>
                <Ionicons name="add-outline" size={30} color='#555'/>
          </TouchableOpacity>
        ), // AGREGAR EN EL ONPRESS LA FUNCIÓN DEL BOTÓN +
        drawerActiveBackgroundColor: '#CCE0B9',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#555',
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
        name="Editar Perfil"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
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