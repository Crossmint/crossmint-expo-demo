import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import utilities to setup fetch interceptor
import "@/src/utils";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Crossmint Expo Demo" }} />
        <Stack.Screen name="(dom)" options={{ title: "DOM Components" }} />
        <Stack.Screen name="(webview)" options={{ title: "WebView" }} />
      </Stack>
    </QueryClientProvider>
  );
}
