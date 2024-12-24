"use dom";

import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
  useCrossmintCheckout,
  CrossmintCheckoutProvider,
} from "@crossmint/client-sdk-react-ui";

function CheckoutStatus() {
  const { order } = useCrossmintCheckout();
  console.log({ order: order ?? {} });
  console.log({ payment: order?.payment ?? {} });

  return null;
}

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
        <CrossmintCheckoutProvider>
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
          <CheckoutStatus />
        </CrossmintCheckoutProvider>
      </CrossmintProvider>
    </div>
  );
}
