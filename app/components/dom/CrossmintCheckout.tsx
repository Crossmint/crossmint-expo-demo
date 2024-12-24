"use dom";

import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
} from "@crossmint/client-sdk-react-ui";

export default function CrossmintCheckout({
  apiKey,
  collectionLocator,
}: {
  dom?: import("expo/dom").DOMProps;
  apiKey: string;
  collectionLocator: string;
}) {
  return (
    <CrossmintProvider apiKey={apiKey}>
      <CrossmintEmbeddedCheckout
        lineItems={{
          collectionLocator: collectionLocator,
          callData: {
            totalPrice: "0.001",
            quantity: 1,
          },
        }}
        payment={{
          crypto: { enabled: false },
          fiat: { enabled: true },
        }}
      />
    </CrossmintProvider>
  );
}
