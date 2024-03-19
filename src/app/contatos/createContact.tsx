import { api } from "@/server/api";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateContact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");

  const router = useRouter();

    async function handleRegister() {
        try {
            const response = await api.post("/lista", {
                nome,
                email,
                telefone,
                imagem,
            });
            router.push("/contatos/");
        } catch (error) {
            Alert.alert("Não foi possivel cadastrar.");
        }
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Imagem"
        onChangeText={setImagem}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
