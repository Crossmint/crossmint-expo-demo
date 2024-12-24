import Button from "@/app/components/ui/Button";
import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Crossmint Demo</Text>
        <Text style={styles.subtitle}>
          React Native + Expo + DOM Components
        </Text>

        <View style={styles.buttons}>
          <Link href="/checkout" asChild>
            <Button title="Embedded Checkout" />
          </Link>

          <View style={styles.spacer} />

          <Link href="/wallets" asChild>
            <Button title="Wallets" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    marginTop: "30%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  buttons: {
    marginTop: 20,
  },
  spacer: {
    height: 12,
  },
});
