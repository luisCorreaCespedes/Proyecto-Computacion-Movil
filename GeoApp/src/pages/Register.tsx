/*Register View*/
import React, {useEffect, useState} from "react";
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Alert, BackHandler} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth } from "../../firebaseAuth";

interface Navigation {
  navigate(destination: string): void;
}

const RegisterScreen = ({navigation}: {navigation: Navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      return true;
  }

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        Alert.alert('Registro', 'Registrado correctamente', 
        [{text: 'Vale', onPress: () => navigation.navigate('Mapa')}])
      })
      .catch(error => 
        Alert.alert('Registro', 'Los datos ingresados no son válidos. Intente nuevamente.', [{text: 'Volver'}])
        )
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 80}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center', paddingBottom: 20}}>
            <Image source={require('../img/Register.png')} style={{height: 240, width: 240}}/>
          </View>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{
              fontSize: 24, 
              fontWeight: '700', 
              color: '#333', 
              marginBottom: 25
            }}>
              Crear Cuenta
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
              placeholder="Correo Electrónico" 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}} 
              keyboardType='email-address'
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            borderBottomColor: '#ccc', 
            borderBottomWidth: 1, 
            paddingBottom: 8, 
            marginBottom: 15
          }}>
            <Ionicons name='ios-lock-closed-outline' size={20} color='#666'/>
            <TextInput 
              placeholder="Contraseña (mínimo 6 carácteres)" 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}} 
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
              />
          </View>
          
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={handleRegister}
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
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
          }}>
            <Text>¿Ya tienes una cuenta? </Text>
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

export default RegisterScreen;