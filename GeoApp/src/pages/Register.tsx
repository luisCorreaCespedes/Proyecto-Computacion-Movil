/*Register View*/
import React from "react";
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import InputFields from "../components/InputFields";

const RegisterScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 40}}>
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

          <InputFields label={'Nombre de Usuario'} icon={ <Ionicons name='person-outline' size={20} color='#666'/> } />

          <InputFields label={'Correo Eletrónico'} icon={ <MaterialIcons name='alternate-email' size={20} color='#666'/>} keyboardType='email-address'/>
          
          <InputFields label={'Contraseña'} icon={ <Ionicons name='ios-lock-closed-outline' size={20} color='#666'/>} inputType='password'/>

          <InputFields label={'Confirma la Contraseña'} icon={ <Ionicons name='ios-lock-closed-outline' size={20} color='#666'/>} inputType='password'/>
          
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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