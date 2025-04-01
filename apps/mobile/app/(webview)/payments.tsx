import useUserAgent from "@/app/hooks/useUserAgent";
import { crossmintOriginUrl } from "@/src/utils/config";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PaymentsWebView() {
  const { userAgent } = useUserAgent();
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `${crossmintOriginUrl}payments`,
        }}
        enableApplePay={true}
        style={styles.webview}
        originWhitelist={["*"]}
        scrollEnabled={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        cacheEnabled={true}
        userAgent={userAgent}
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
