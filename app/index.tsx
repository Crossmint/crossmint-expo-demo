import { View, StyleSheet } from "react-native";
import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
} from "@crossmint/client-sdk-react-ui";

export default function Index() {
  return (
    <View style={styles.container}>
      <CrossmintProvider apiKey="ck_staging_AFW7BixVDxfP1MRangw7ec59tNN1j4eDZocCNHnZgWVH7qpJZDD3Un4gUpLFfSQoxUba8u53nMzSWRWXjCXfJRG3WLPHXgWM1Kk53Sva2k2hxzEEkjU7d7788MHgngwR9pWqYoUwWs2ZSjAuoQJX4fax1hPjHsFGbxGhEw8sWmQiTCjSNkF5Dd6WzZnDZEFAQVNSfc8jS8hnBazQfn1Mn6Kf">
        <CrossmintEmbeddedCheckout
          lineItems={{
            collectionLocator: "crossmint:3f8093f4-db99-4b4a-8bb3-f676d69bc727",
            callData: {
              totalPrice: "0.001",
              quantity: 1,
            },
          }}
          payment={{
            crypto: { enabled: true },
            fiat: { enabled: true },
          }}
        />
      </CrossmintProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
