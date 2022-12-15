/*Imports*/
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';

const auth = getAuth();


/*Custom Side Bar*/
const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#f4f4f4'}}>
        <ImageBackground source={require('../img/menuBg.jpg')} style={{padding: 20}}>

         <View>
            {
              (auth.currentUser?.photoURL !== null) ? 
              <Image source={{uri: auth.currentUser?.photoURL}} style={{height: 90, width: 90, borderRadius: 15}}/> :
              <Image source={require('../img/Profile1.png')} style={{height: 90, width: 90, borderRadius: 15}}/>
            }
          <View style={{justifyContent: 'space-evenly', marginLeft: 10, paddingBottom: 7, paddingTop: 12}}>
            <Text style={{ color: '#000', fontWeight: '700', fontSize: 17}}>
              {
                (auth.currentUser?.displayName !== null) ? auth.currentUser?.displayName : 'Nuevo Usuario'
              }
            </Text>
            <Text style={{ color: '#000', marginRight: 5, fontSize: 13}}>
              {auth.currentUser?.email}
            </Text>
        
          </View>
         </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{paddingLeft: 20, paddingBottom: 5, paddingTop: 5, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity 
          onPress={() => {
            auth.signOut(),
            props.navigation.navigate('Ingreso')
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5}}>
              Cerrar Sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;