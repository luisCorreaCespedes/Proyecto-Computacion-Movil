/*Home View*/
import * as React from "react";
import * as Location from 'expo-location'
import { Text, StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";
import { database } from "../../firebaseAuth";

const Home = () => {

  const [origin, setOrigin] = React.useState({
    latitude: -33.46604,
    longitude: -70.59702,
  })

  React.useEffect(() => {
    getLocationPermission();
  }, [])

async function getLocationPermission(){
  let {status} = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted'){
    alert('Permiso denegado');
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  const current = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
  setOrigin(current)
}

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={'google'} 
        showsUserLocation 
        showsMyLocationButton 
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});

export default Home;