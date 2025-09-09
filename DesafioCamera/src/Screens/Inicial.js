import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 RecAudio</Text>
      <Button
        title="Abrir Câmera"
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
