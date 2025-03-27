import Button from "./components/ui/Button";
import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Crossmint Expo Demo</Text>
        <Text style={styles.subtitle}>Integration Examples</Text>

        <View style={styles.buttons}>
          <Text style={styles.sectionTitle}>Payments</Text>
          <Link href="./(dom)/payments" asChild>
            <Button title="DOM Components" />
          </Link>

          <View style={styles.spacer} />

          <Link href="./(webview)/payments" asChild>
            <Button title="WebView" />
          </Link>

          <View style={styles.spacer} />

          <Text style={styles.sectionTitle}>Wallets</Text>
          <Link href="./(dom)/wallets" asChild>
            <Button title="DOM Components" />
          </Link>

          <View style={styles.spacer} />

          <Link href="./(webview)/wallets" asChild>
            <Button title="WebView" />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  spacer: {
    height: 12,
  },
});
