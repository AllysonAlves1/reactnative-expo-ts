import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0080FF",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="contatos/index"
        options={{
          headerTitle: () => (
            // Use a função headerTitle para definir um componente personalizado para o título do cabeçalho
            <HeaderTitleWithIcon title="Contatos" iconName="plussquare" />
          ),
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="contatos/[id]" options={{ title: "Contato" }} />
      <Stack.Screen
        name="contatos/createContact"
        options={{ title: "Criar Contato" }}
      />
    </Stack>
  );
}

function HeaderTitleWithIcon({
  title,
  iconName,
}: {
  title: string;
  iconName: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>{title}</Text>
      <View style={{ marginRight: 24 }}>
        <Link href="/contatos/createContact">
          <AntDesign name={iconName} size={24} color="white" />
        </Link>
      </View>
    </View>
  );
}
