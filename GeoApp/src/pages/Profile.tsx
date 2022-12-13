/*Profile View*/
import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Alert, BackHandler, ImageBackground} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth } from "../../firebaseAuth";

interface Navigation {
  navigate(destination: string): void;
}

const Profile = ({navigation}: {navigation: Navigation}) => {

  const [userName, setUserName] = useState('');
  const [refreshPage, setRefreshPage] = useState('');
  
  const user = auth.currentUser;
  let avatar: any;

  const userImageUpdate = (avatar: any) => {
    user?.updateProfile({
      photoURL: avatar
    }).then(() => {
      Alert.alert('Editar Perfil', 'La Foto de Perfil ha sido cambiada exitosamente', [{text: 'Aceptar', onPress: () => {setRefreshPage('refresh')}}], {cancelable: false})
    }).catch((error) => {
      Alert.alert('Editar Perfil', 'No se ha podido cambiar la Foto de Perfil. Intenta más tarde.', [{text: 'Volver'}])
    }); 
  }

  const userNameUpdate = () => {
    if (userName !== '') {
      user?.updateProfile({
        displayName: userName,
      }).then(() => {
        Alert.alert('Editar Perfil', 'El Nombre de Usuario sido cambiado exitosamente.', [{text: 'Aceptar', onPress: () => {setRefreshPage('refresh')}}], {cancelable: false})
      }).catch((error) => {
        Alert.alert('Editar Perfil', 'No se ha podido cambiar el Nombre de Usuario. Intenta más tarde.', [{text: 'Volver'}])
      });
    } else {
      Alert.alert('Editar Perfil', 'El campo está vacio. Ingresa un Nombre de Usuario.', [{text: 'Ok'}])
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20}}>
        <View style={{paddingHorizontal: 25}}>

        <View style={{
            flexDirection: 'row', 
            alignItems: 'center',  
            paddingBottom: 10
          }}>
            <Text style={{marginRight: 5, fontWeight: '700', fontSize: 15, marginBottom: 10}}>Cambiar Foto de Perfil</Text>
          </View>
          <View style={{alignItems: 'center', paddingBottom: 30}}>
            {
              (auth.currentUser?.photoURL !== null) ? 
              <Image source={{uri: auth.currentUser?.photoURL}} style={{height: 160, width: 160, borderRadius: 15}}/> :
              <Image source={require('../img/Profile1.png')} style={{height: 160, width: 160, borderRadius: 15}}/>
            }
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/3940/3940401.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile1.png')} style={{height: 50, width: 50, borderRadius: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile2.png')} style={{height: 50, width: 50, borderRadius: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4128/4128335.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile3.png')} style={{height: 50, width: 50, borderRadius: 15}}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4322/4322991.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile4.png')} style={{height: 50, width: 50, borderRadius: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/3940/3940435.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile5.png')} style={{height: 50, width: 50, borderRadius: 15}}/>
            </TouchableOpacity>

          </View>
          
          <View style={{
            flexDirection: 'row', 
            justifyContent: 'center',
            paddingTop: 10
          }}>
            <Text style={{marginRight: 5, fontWeight: '700', fontSize: 14, fontStyle: 'italic', color: '#888'}}>Selecciona un Avatar</Text>
          </View>

          <View style={{borderBottomColor: '#000', borderBottomWidth: 2, paddingTop: 20}}></View>

          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingTop: 20, 
            paddingBottom: 10
          }}>
            <Text style={{marginRight: 5, fontWeight: '700', fontSize: 15}}>Cambiar Nombre de Usuario</Text>
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
            paddingBottom: 5, 
            marginBottom: 15
          }}>
            <Text style={{marginRight: 5}}>Tu actual Nombre es:</Text>
            <Text style={{fontStyle: 'italic', fontWeight: '700'}}>
            {
              auth.currentUser?.displayName
            }
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={userNameUpdate}
              style={{
                backgroundColor: '#888',
                padding: 8,
                borderRadius: 15,
                marginTop: 5,
                marginBottom: 20,
                width: 150
              }}>
              <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 14,
                color: '#fff'
              }}>
                Actualizar Nombre
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Profile;


/*

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

*/