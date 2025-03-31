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
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
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
