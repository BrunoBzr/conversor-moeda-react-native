import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
