import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WalletsWebView() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://crossmint-expo-demo-web.vercel.app/wallets",
        }}
        style={styles.webview}
        originWhitelist={["*"]}
        scrollEnabled={false}
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
