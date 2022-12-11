/*Other View*/
import { useEffect } from "react";
import { Text, StyleSheet, View, BackHandler } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Vista de prueba para agregar otra cosa... creo</Text>
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

export default About;