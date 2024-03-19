import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { api } from "@/server/api";
import { isAxiosError } from "axios";
import { Link, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/server/firebase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignIn() {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/contatos");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        // Trate os erros de autenticação aqui
        console.error("Credenciais inválidas");
      } else {
        // Trate outros erros
        console.error("Erro desconhecido:", error.message);
      }
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Text style={styles.message}>
        Não tem uma conta? <Link style={styles.link} href="/register">Cadastre-se</Link>
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Entrar</Text>
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
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3",
    borderRadius: 8,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#BBBBBB",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold"
  },
  link: {
    color: "#0008",
    fontWeight: "normal",
  },
});
