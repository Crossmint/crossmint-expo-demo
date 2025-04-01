import useUserAgent from "@/app/hooks/useUserAgent";
import { crossmintOriginUrl } from "@/src/utils/config";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

interface AuthProps {
  onLoginSuccess: (jwt: string) => void;
  onLogout: () => void;
}

export default function Auth({ onLoginSuccess, onLogout }: AuthProps) {
  const webViewRef = useRef<WebView | null>(null);
  const { userAgent } = useUserAgent();

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{
          uri: `${crossmintOriginUrl}auth`,
        }}
        style={styles.webview}
        originWhitelist={["*"]}
        scrollEnabled={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        cacheEnabled={true}
        userAgent={userAgent}
        onMessage={(event) => {
          console.log("Received message:", event.nativeEvent.data);
          try {
            const message = JSON.parse(event.nativeEvent.data);
            if (message.type === "login_success") {
              onLoginSuccess(message.jwt);
              return;
            }
            if (message.type === "logout") {
              onLogout();
              return;
            }
          } catch (error) {
            console.log("Error parsing message:", error);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
});
