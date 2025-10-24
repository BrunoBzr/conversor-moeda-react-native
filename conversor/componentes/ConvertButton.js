import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ConvertButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Converter</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c1ec6bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    color: "#266589ff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
