import { Stack } from "expo-router";

export default function DOMLayout() {
  return (
    <Stack>
      <Stack.Screen name="payments" options={{ title: "Checkout (DOM)" }} />
      <Stack.Screen name="wallets" options={{ title: "Wallets (DOM)" }} />
    </Stack>
  );
}
