import * as React from "react";
import Accordion from 'react-native-accordion-wrapper';
import { View, Text , Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const About = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 5 }}>

          <View style={{alignItems: 'center', paddingBottom: 3}}>
            <Image source={require('../img/Logo.png')} style={{height: 120, width: 300}}/>
          </View>

          <View style={{alignItems: 'center', paddingBottom: 10}}>
            <Text style={{
              fontSize: 17,
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              Versión 1.0.0
            </Text>
          </View>

          <View style={{alignItems: 'center', paddingBottom: 30}}>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              Desarrollado por estudiantes de la UTEM 🥪
            </Text>
          </View>

          <Accordion
            shouldSelectOneItemAtATime
            headerItemsStyle={{
              backgroundColor: '#CCE0B9',
              borderBottomColor: '#CCE0B9',
              borderRadius: 10,
              paddingLeft: 12,
              borderColor: '#888'
            }}
            headerTitleLabelStyle={{
              fontSize: 20,
              fontWeight: '400'
            }}
            dataSource={[{
              title: 'Problematica',
              child: <View>
                <Text style={{
                  fontSize: 15,
                  paddingTop: 5,
                  marginLeft: 8,
                  marginRight: 8,
                  paddingBottom: 5,
                }}>
                  En el 2016, el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA), 
                  alertó de que un aumento mundial de las epidemias zoonóticas era motivo de 
                  preocupación. En concreto, señaló que el 75% de todas las enfermedades infecciosas
                  nuevas en humanos son zoonóticas y que dichas enfermedades están estrechamente
                  relacionadas con la salud de los ecosistemas.
                </Text>
              </View>
            }, {
              title: 'Acerca de la aplicacion',
              child: <View>
                <Text style={{
                  fontSize: 15,
                  paddingTop: 5,
                  marginLeft: 8,
                  marginRight: 8,
                  paddingBottom: 5,
                }}>
                  La aplicación fue inspirada en uno de los objetivos de desarrollo sustenible,
                  "15 Vida de Ecosistemas Terrestres". La idea de la aplicación, es trabajar con
                  geolocalización para poder divisar lugares con diferentes tipos de daños en el
                  ecosistema terrestre. Tales como por ejemplo, árboles talados o bosques quemados.
                </Text>
              </View>
            }, {
              title: 'Integrantes',
              child: <View>
                <Text style={{
                  fontSize: 15,
                  paddingTop: 5,
                  marginLeft: 8,
                  marginRight: 8,
                  paddingBottom: 5,
                }}>
                  Integrantes: Alexis Abarca Arias ; Francisco Díaz Hernández ; Luis Correa Céspedes ;
                  Rodrigo Aguirre Rodriguez
                </Text>
              </View>
            }]}
          />

      </ScrollView>
    </SafeAreaView>
  );
}

export default About