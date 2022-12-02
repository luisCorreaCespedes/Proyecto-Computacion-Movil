import * as React from 'react';
import { View, Text , Image, ImageProps} from 'react-native';
import { ImageSourcePropType } from 'react-native';


import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Other } from './pages/Other';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>

      <DrawerContentScrollView {...props}>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6'
          }}
        >
          <View>
            <Text style={{ fontWeight: '800', fontSize: 18 }}>John Doe A.</Text>
            <Text>example@email.com</Text>
          </View>
          <Image 
            source={require('./assets/Profile.png')}
            style={{
              width: 80, 
              height: 80, 
              borderRadius: 15,
              marginRight: 5,
              marginBottom: 5
            }}
          />
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <TouchableOpacity style={{ 
        position: 'absolute',
        right: 0, 
        left: 0,
        bottom: 20,
        backgroundColor: '#f6f6f6',
        padding: 10
        }}>
        <Text style={{fontSize: 16, fontWeight: '800'}}> 🚪 Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/> }>
      <Drawer.Screen component={Home} name=' 🏠 Inicio'/>
      <Drawer.Screen component={Profile} name=' 👤 Perfil'/>
      <Drawer.Screen component={Other} name=' 🐣 Otros'/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
}