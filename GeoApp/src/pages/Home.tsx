/*Home View*/
import React from "react";
import { Text, StyleSheet, View} from "react-native";
import MapView from "react-native-maps";

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={'google'} showsUserLocation showsMyLocationButton />
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