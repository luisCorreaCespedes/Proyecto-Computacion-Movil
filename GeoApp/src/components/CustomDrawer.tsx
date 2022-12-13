/*Imports*/
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
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
          {
            (auth.currentUser?.photoURL !== null) ? 
            <Image source={{uri: auth.currentUser?.photoURL}} style={{height: 80, width: 80, borderRadius: 15, marginBottom: 10}}/> :
            <Image source={require('../img/Profile.png')} style={{height: 80, width: 80, borderRadius: 15, marginBottom: 10}}/>
          }
          <Text style={{ color: '#000', fontWeight: '700', fontSize: 18, marginBottom: 5}}>
            {
              (auth.currentUser?.displayName !== null) ? auth.currentUser?.displayName : 'Nuevo Usuario'
            }
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ color: '#000', marginRight: 5}}>
              {auth.currentUser?.email}
            </Text>
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