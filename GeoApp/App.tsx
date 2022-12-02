import * as React from 'react';
import { View, Text , Image, ImageBackground, Button, Alert, TouchableOpacity} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/*ICONS*/
import { FontAwesome } from '@expo/vector-icons';

/*PAGES*/
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Other } from './pages/Other';


/*Side Bar*/
const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={require('./assets/menuBg.jpg')} style={{marginBottom: 15, opacity: 50}}>
          <View style={{
              flexDirection: 'row', 
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20
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
        </ImageBackground>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View style={{
        paddingLeft: 20, 
        borderTopWidth:1,
        borderTopColor: '#ccc'
        }}
      >
        <TouchableOpacity onPress={()=>{}} style={{ paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="sign-out" size={24} color="black" />
            <Text style={{ fontWeight: '600', fontSize: 14, margin: 7 }}>Salir</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerShown: true, 
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props}/>}
    >
      <Drawer.Screen component={Home} name='Inicio' options={{
           title: 'Inicio',
           drawerIcon: ({focused, size}) => (
            <FontAwesome name="home" size={24} color="black" />
           ),
        }}
      />
      <Drawer.Screen component={Profile} name='Perfil' options={{
           title: 'Perfil',
           drawerIcon: ({focused, size}) => (
            <FontAwesome name="users" size={23} color="black" />
           ),
        }}
      />
      <Drawer.Screen component={Other} name='Otros' options={{
           title: 'Otros',
           drawerIcon: ({focused, size}) => (
            <FontAwesome name="leaf" size={24} color="black" />
           ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
}