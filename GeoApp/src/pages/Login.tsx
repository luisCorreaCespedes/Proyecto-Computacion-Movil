/*Login View*/
import React, {useEffect, useState} from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View, Image, TouchableOpacity, Alert, BackHandler} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth } from "../../firebaseAuth";
import { LoadingOverlay } from '../components/LoadingScreen';

interface Navigation {
  navigate(destination: string): void;
}

let val = false;

const LoginScreen = ({navigation}: {navigation: Navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleLogin = () => {
    setLoading(true)
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        navigation.navigate('Mapa');
      })
      .catch(error => 
        Alert.alert('Inicio de Sesión', 'Las credenciales no son válidas. Intenta nuevamente.', [{text: 'Volver'}])
        )
      .finally(() => setLoading(false));  
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 80}}>
        <LoadingOverlay loading={loading}></LoadingOverlay>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center', paddingBottom: 20}}>
            <Image source={require('../img/Login.png')} style={{height: 240, width: 240}}/>
          </View>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{
              fontSize: 24, 
              fontWeight: '700', 
              color: '#333', 
              marginBottom: 25
            }}>
              Iniciar Sesión
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
              placeholder="Correo electrónico" 
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
              placeholder="Contraseña" 
              style={{marginLeft: 10, flex: 1, paddingVertical: 0}} 
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
              />
            <TouchableOpacity onPress={() => {navigation.navigate('Reestablecer')}}>
              <Text style={{color: '#7CBE7C', fontWeight: '700'}}>Reestablecer</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={handleLogin}
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
                  Ingresar
                </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
          }}>
            <Text>¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Registro')}}>
              <Text style={{
                fontWeight: '700',
                fontSize: 14,
                color: '#4A7F4A'
              }}>
                Registrate
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen;