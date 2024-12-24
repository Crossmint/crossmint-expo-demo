"use dom";

import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
} from "@crossmint/client-sdk-react-ui";

export default function CrossmintCheckout({
  apiKey,
  collectionId,
}: {
  apiKey: string;
  collectionId: string;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "16px",
      }}
    >
      <CrossmintProvider apiKey={apiKey}>
        <CrossmintEmbeddedCheckout
          lineItems={{
            collectionLocator: `crossmint:${collectionId}`,
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
    </div>
  );
}
