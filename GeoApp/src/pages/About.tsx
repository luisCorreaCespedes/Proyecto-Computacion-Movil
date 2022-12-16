import * as React from "react";
import Accordion from 'react-native-accordion-wrapper';
import { View, Text } from 'react-native';

const About = () => {

  return (
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
            marginLeft: 5,
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
            marginLeft: 5,
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
            marginLeft: 5,
            paddingBottom: 5,
          }}>
            Integrantes: Alexis Abarca Arias ; Francisco Díaz Hernández ; Luis Correa Céspedes ;
            Rodrigo Aguirre Rodriguez y necesitamos un 5.8 :c
          </Text>
        </View>
      }]} />
  );
}

export default About