/*Home View*/
import { useEffect } from "react";
import { Text, StyleSheet, View, BackHandler } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Aquí va el mapa!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Home;