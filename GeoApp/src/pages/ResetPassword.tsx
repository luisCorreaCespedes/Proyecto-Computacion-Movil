/*Login View*/
import React, {useEffect, useState} from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View, Image, TouchableOpacity, Alert, BackHandler} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from "../../firebaseAuth";
import { sendPasswordResetEmail } from "firebase/auth";

interface Navigation {
  navigate(destination: string): void;
}

let val = false;

const ResetPasswordScreen = ({navigation}: {navigation: Navigation}) => {

  const [email, setEmail] = useState('');
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backPressed);
  }, []);

  const backPressed = () => {
    Alert.alert(
      'GeoAlert',
      '¿Deseas salir de la aplicación?',
      [
        {text: 'Volver', onPress: () => console.log('Cancelar'), style: 'cancel'},
        {text: 'Salir', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
      return val = true;
  }

  const resetPass = () => {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Reestablecer Contraseña', 'Se ha enviado un link a tu Correo asociado para Reestablecer la Contraseña.', [{text: 'Ok'}])
      })
      .catch((error) => {
        Alert.alert('Reestablecer Contraseña', 'El correo ingresado no es válido. Intenta nuevamente.', [{text: 'Ok'}])
      });
  }


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 80}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center', paddingBottom: 5}}>
            <Image source={require('../img/ResetPass.png')} style={{height: 270, width: 240}}/>
          </View>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{
              fontSize: 24, 
              fontWeight: '700', 
              color: '#333', 
              marginBottom: 25
            }}>
              Reestablecer Contraseña
            </Text>
          </View>
          
          <View style={{paddingBottom: 30}}>
            <Text style={{fontStyle: 'italic'}}>
                Te enviaremos un link al correo asociado a tu cuenta para que puedas cambiar tu contraseña.
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
              placeholder="Ingresa tu Correo electrónico" 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}} 
              keyboardType='email-address'
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={resetPass}
              style={{
                backgroundColor: '#7CBE7C',
                padding: 8,
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 20,
                width: 120
              }}
            >
                <Text style={{
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#fff'
                }}>
                  Reestablecer
                </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
          }}>
            <Text>¿Recordaste tu contraseña? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Ingreso')}}>
              <Text style={{
                fontWeight: '700',
                fontSize: 14,
                color: '#4A7F4A'
              }}>
                Inicia Sesión
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen;