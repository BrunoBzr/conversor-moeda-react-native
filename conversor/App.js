import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./componentes/Input";
import Result from "./componentes/Result";
import ConvertButton from "./componentes/ConvertButton";

export default function App() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);

  const taxaDolar = 5.65;

  const converter = () => {
    if (!valor || isNaN(valor)) {
      setResultado("Digite um número válido!");
      return;
    }
    const convertido = (parseFloat(valor) / taxaDolar).toFixed(2);
    setResultado(`USD ${convertido}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💱 Conversor de Moeda</Text>
      <Text style={styles.subtitle}>De Real (BRL) para Dólar (USD)</Text>

      <Input
        placeholder="Digite o valor em Reais"
        value={valor}
        onChangeText={setValor}
      />

      <ConvertButton onPress={converter} />

      <Result valorConvertido={resultado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
