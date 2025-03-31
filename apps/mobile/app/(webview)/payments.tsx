import { crossmintOriginUrl } from "@/src/utils/config";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PaymentsWebView() {
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
        sharedCookiesEnabled={true} // iOS
        thirdPartyCookiesEnabled={true} // Android
        cacheEnabled={true}
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
