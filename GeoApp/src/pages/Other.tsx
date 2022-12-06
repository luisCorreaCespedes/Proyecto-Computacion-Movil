/*Other View*/
import { Text, StyleSheet, View } from "react-native";

export function Other() {
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