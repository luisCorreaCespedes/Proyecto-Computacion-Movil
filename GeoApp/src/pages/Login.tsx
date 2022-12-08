/*Login View*/
import React from "react";
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
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
          <TextInput placeholder="Ingrese su correo" style={{marginLeft: 10, flex: 1, paddingVertical: 0}} keyboardType='email-address'/>
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
          <TextInput placeholder="Ingrese su contraseña" style={{marginLeft: 10, flex: 1, paddingVertical: 0}} secureTextEntry={true}/>
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
          <TouchableOpacity onPress={() => {}}>
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
    </SafeAreaView>
  )
}

export default LoginScreen;