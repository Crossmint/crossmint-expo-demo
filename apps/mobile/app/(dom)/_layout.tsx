import { Stack } from "expo-router";

export default function DOMLayout() {
  return (
    <Stack>
      <Stack.Screen name="payments" />
      <Stack.Screen name="wallets" />
    </Stack>
  );
}
