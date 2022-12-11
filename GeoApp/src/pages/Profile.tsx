/*Profile View*/
import { useEffect } from "react";
import { Text, StyleSheet, View, BackHandler } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Acá va el perfil del usuario!</Text>
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

export default Profile;