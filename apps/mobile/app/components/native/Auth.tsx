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
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        cacheEnabled={true}
        userAgent={userAgent}
        onMessage={(event) => {
          const { type, jwt } = JSON.parse(event.nativeEvent.data);
          if (type === "login_success") {
            onLoginSuccess(jwt);
            return;
          }
          if (type === "logout") {
            onLogout();
            return;
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
