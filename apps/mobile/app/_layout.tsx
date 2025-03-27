import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Crossmint Expo Demo" }} />
      <Stack.Screen name="(dom)" options={{ title: "DOM Components" }} />
      <Stack.Screen name="(webview)" options={{ title: "WebView" }} />
    </Stack>
  );
}
