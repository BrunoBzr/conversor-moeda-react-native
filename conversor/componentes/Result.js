import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Result({ valorConvertido }) {
  if (!valorConvertido) return null;

  return <Text style={styles.result}>{valorConvertido}</Text>;
}

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 10,
  },
});
