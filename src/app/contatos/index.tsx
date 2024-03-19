import { api } from "@/server/api";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Contato } from "./[id]";
import { Avatar, ListItem } from "@rneui/base";

export default function Contatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    api
      .get("/lista")
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => console.error("Erro ao carregar os contatos: ", error));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={{width: "100%"}}>
        {contatos.map((contato, i) => (
          <Link key={i} href={`/contatos/${contato.id}`}>
            <ListItem key={i} bottomDivider>
              <Avatar rounded source={{ uri: contato.imagem }} />
              <ListItem.Content>
                <ListItem.Title>{contato.nome}</ListItem.Title>
                <ListItem.Subtitle>{contato.telefone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
