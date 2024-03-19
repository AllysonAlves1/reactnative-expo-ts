import { api } from "@/server/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type Contato = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  imagem: string;
};

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");

  const { id } = useLocalSearchParams();

  const router = useRouter();

  useEffect(() => {
    api
      .get(`/lista/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setEmail(response.data.email);
        setTelefone(response.data.telefone);
        setImagem(response.data.imagem);
      })
      .catch((error) => {
        console.error("Erro ao carregar os contatos: ", error);
      });
  }, [id]);

  async function handleUpdate() {
    try {
      const response = await api.patch(`/lista/${id}`, {
        nome,
        email,
        telefone,
        imagem,
      });
      router.push("/contatos/");
    } catch (error) {
      Alert.alert("Não foi possivel atualizar.");
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/lista/${id}`);
      router.push("/contatos/");
    } catch (error) {
      Alert.alert("Não foi possivel deletar.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={nome}
        style={styles.input}
        placeholder="Name"
        onChangeText={setNome}
      />
      <TextInput
        value={email}
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        value={telefone}
        style={styles.input}
        placeholder="Telefone"
        onChangeText={setTelefone}
      />
      <TextInput
        value={imagem}
        style={styles.input}
        placeholder="Imagem"
        onChangeText={setImagem}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.text}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.text}>Deletar</Text>
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
