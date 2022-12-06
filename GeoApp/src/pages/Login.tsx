/*Login View*/
import { Text, StyleSheet, View } from "react-native";

export function Login() {
  return (
    <View style={styles.container}>
      <Text>Login aquí</Text>
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