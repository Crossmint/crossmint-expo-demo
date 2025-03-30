import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PaymentsWebView() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://crossmint-expo-demo-web.vercel.app/payments",
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
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
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
