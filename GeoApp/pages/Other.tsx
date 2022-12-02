import { FlatList, Text, StyleSheet, View } from "react-native";
import { useState } from "react";

function Separator() {
  return (
    <View style={{ width: "100%", height: 1, backgroundColor: "#f3f3f3" }} />
  );
}

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