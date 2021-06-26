import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>ABOUT PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
