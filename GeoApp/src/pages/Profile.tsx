/*Profile View*/
import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Alert, BackHandler, ImageBackground} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInAnonymously, updateProfile, updateEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

interface Navigation {
  navigate(destination: string): void;
}

let auth = getAuth();

const Profile = ({navigation}: {navigation: Navigation}) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 40}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center', paddingBottom: 50}}>
            <Image source={require('../img/Profile.png')} style={{height: 160, width: 160, borderRadius: 15}}/>
          </View>
          
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            borderBottomColor: '#ccc', 
            borderBottomWidth: 1, 
            paddingBottom: 8, 
            marginBottom: 15
          }}>
            <Ionicons name='person-outline' size={20} color='#666'/>
            <TextInput 
              placeholder='Tu nuevo Nombre de Usuario...' 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}}
              value={userName}
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center',  
            paddingBottom: 25, 
            marginBottom: 15
          }}>
            <Text style={{marginRight: 5}}>Tu actual Nombre es:</Text>
            <Text style={{fontStyle: 'italic', fontWeight: '700'}}>
            {
              (auth.currentUser?.displayName !== null) ? auth.currentUser?.displayName : 'Nuevo Usuario'
            }
            </Text>
          </View>

          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            borderBottomColor: '#ccc', 
            borderBottomWidth: 1, 
            paddingBottom: 8, 
            marginBottom: 15
          }}>
            <MaterialIcons name='alternate-email' size={20} color='#666'/>
            <TextInput 
              placeholder='Tu nuevo Correo Electrónico...' 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}}
              keyboardType='email-address'
              
            />
          </View>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center',  
            paddingBottom: 25, 
            marginBottom: 15
          }}>
            <Text style={{marginRight: 5}}>Tu actual Correo es:</Text>
            <Text style={{fontStyle: 'italic', fontWeight: '700'}}>
            {
              (auth.currentUser?.email !== null) ? auth.currentUser?.email : 'example@test.com'
            }
            </Text>

          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={() => {}}
              style={{
                backgroundColor: '#7CBE7C',
                padding: 8,
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 20,
                width: 150
              }}
            >
                <Text style={{
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#fff'
                }}>
                  Actualizar Datos
                </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;
