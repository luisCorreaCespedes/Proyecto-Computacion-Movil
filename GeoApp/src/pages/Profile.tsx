/*Profile View*/
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Alert, BackHandler, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { auth } from "../../firebaseAuth";
import { LoadingOverlay } from '../components/LoadingScreen';


interface Navigation {
  navigate(destination: string): void;
}

const Profile = ({ navigation }: { navigation: Navigation }) => {

  const [userName, setUserName] = useState('');
  const [refreshPage, setRefreshPage] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  let avatar: any;



  const userImageUpdate = (avatar: any) => {
    setLoading(true)
    user?.updateProfile({
      photoURL: avatar
    }).then(() => {
      Alert.alert('Editar Perfil', 'La Foto de Perfil ha sido cambiada exitosamente', [{ text: 'Aceptar', onPress: () => { setRefreshPage('refresh') } }], { cancelable: false })
    }).catch((error) => {
      Alert.alert('Editar Perfil', 'No se ha podido cambiar la Foto de Perfil. Intenta más tarde.', [{ text: 'Volver' }])
    }).finally(() => setLoading(false));
  }

  const userNameUpdate = () => {
    if (userName !== '') {
      setLoading(true)
      user?.updateProfile({
        displayName: userName,
      }).then(() => {
        Alert.alert('Editar Perfil', 'El Nombre de Usuario sido cambiado exitosamente.', [{ text: 'Aceptar', onPress: () => { setRefreshPage('refresh') } }], { cancelable: false })
      }).catch((error) => {
        Alert.alert('Editar Perfil', 'No se ha podido cambiar el Nombre de Usuario. Intenta más tarde.', [{ text: 'Volver' }])
      }).finally(() => setLoading(false));
    } else {
      Alert.alert('Editar Perfil', 'El campo está vacio. Ingresa un Nombre de Usuario.', [{ text: 'Ok' }])
    }
  }

  const emailValidation = () => {
    setLoading(true)
    user?.sendEmailVerification()
      .then(() => {
        Alert.alert('Verificar email', 'Se ha mandado un email al usuario actual', [{ text: 'Aceptar' }])
      }).catch((error) => {
        Alert.alert('Verificar email', 'El email no recibe correitos ):', [{ text: 'Ok' }])
        console.log(error.message);
      }).finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 20 }}>
        <LoadingOverlay loading={loading}></LoadingOverlay>
        <View style={{ paddingHorizontal: 25 }}>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10
          }}>
            <Text style={{ marginRight: 5, fontWeight: '700', fontSize: 15, marginBottom: 10 }}>Cambiar Foto de Perfil</Text>
          </View>
          <View style={{ alignItems: 'center', paddingBottom: 30 }}>
            {
              (auth.currentUser?.photoURL !== null) ?
                <Image source={{ uri: auth.currentUser?.photoURL }} style={{ height: 160, width: 160, borderRadius: 15 }} /> :
                <Image source={require('../img/Profile1.png')} style={{ height: 160, width: 160, borderRadius: 15 }} />
            }
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/3940/3940401.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile1.png')} style={{ height: 50, width: 50, borderRadius: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile2.png')} style={{ height: 50, width: 50, borderRadius: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4128/4128335.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile3.png')} style={{ height: 50, width: 50, borderRadius: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/4322/4322991.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile4.png')} style={{ height: 50, width: 50, borderRadius: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { avatar = 'https://cdn-icons-png.flaticon.com/512/3940/3940435.png', userImageUpdate(avatar) }}>
              <Image source={require('../img/Profile5.png')} style={{ height: 50, width: 50, borderRadius: 15 }} />
            </TouchableOpacity>

          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10
          }}>
            <Text style={{ marginRight: 5, fontWeight: '700', fontSize: 14, fontStyle: 'italic', color: '#888' }}>Selecciona un Avatar</Text>
          </View>

          <View style={{ borderBottomColor: '#000', borderBottomWidth: 2, paddingTop: 20 }}></View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 10
          }}>
            <Text style={{ marginRight: 5, fontWeight: '700', fontSize: 15 }}>Cambiar Nombre de Usuario</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 15
          }}>
            <Ionicons name='person-outline' size={20} color='#666' />
            <TextInput
              placeholder='Tu nuevo Nombre de Usuario...'
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
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
            <Text style={{ marginRight: 5 }}>Tu actual Nombre es:</Text>
            <Text style={{ fontStyle: 'italic', fontWeight: '700' }}>
              {
                auth.currentUser?.displayName
              }
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
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

          <View style={{ alignItems: 'center' }}>
            {
              (auth.currentUser?.emailVerified == false) ?
                <TouchableOpacity
                  onPress={emailValidation}
                  style={{
                    backgroundColor: '#7CBE7C',
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
                    Verificar email
                  </Text>
                </TouchableOpacity> :
                <Text style={{
                  fontStyle: 'italic'
                }}>
                  Email verificado
                </Text>

            }
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Profile;
