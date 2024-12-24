import { View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href="/checkout" asChild>
        <Button title="Embedded Checkout" />
      </Link>

      <Link href="/wallets" asChild>
        <Button title="Wallets" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
