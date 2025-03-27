import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PaymentsWebView() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://jcurbelo.ngrok.app/payments",
        }}
        style={styles.webview}
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
