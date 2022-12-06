/*Home View*/
import { Text, StyleSheet, View } from "react-native";

export function Home() {
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