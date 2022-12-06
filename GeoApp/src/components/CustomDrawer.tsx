/*Imports*/
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

/*Icons*/
import { Ionicons } from '@expo/vector-icons';

/*Custom Side Bar*/
const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#f4f4f4'}}>
        <ImageBackground source={require('../img/menuBg.jpg')} style={{padding: 20}}>
          <Image source={require('../img/Profile.png')} style={{height: 80, width: 80, borderRadius: 15, marginBottom: 10}}/>
          <Text style={{ color: '#000', fontWeight: '700', fontSize: 18, marginBottom: 5}}>
            John Doe
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ color: '#000', marginRight: 5}}>
              example@email.com
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{paddingLeft: 20, paddingBottom: 5, paddingTop: 5, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
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