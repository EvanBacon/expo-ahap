import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Ahap from "local:ahap";
import React from "react";

export default function App() {
  const play = React.useCallback(() => {
    const json = {};
    Ahap.hello();
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={() => play()}>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
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
});
