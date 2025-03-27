import { Stack } from "expo-router";

export default function WebViewLayout() {
  return (
    <Stack>
      <Stack.Screen name="payments" options={{ title: "Checkout (WebView)" }} />
      <Stack.Screen name="wallets" options={{ title: "Wallets (WebView)" }} />
    </Stack>
  );
} 