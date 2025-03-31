import Auth from "@/app/components/native/Auth";
import Wallet from "@/app/components/native/Wallet";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function WalletsWebView() {
  const [jwt, setJwt] = useState<string | undefined>();

  const handleLoginSuccess = (token: string) => {
    setJwt(token);
  };

  const handleLogout = () => {
    setJwt(undefined);
  };

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Auth onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
      </View>

      {jwt && <Wallet jwt={jwt} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  authContainer: {
    flex: 1,
  },
});
