"use client";

import dynamic from "next/dynamic";

const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;

if (!collectionId) {
  throw new Error("NEXT_PUBLIC_COLLECTION_ID is not set");
}

const CrossmintEmbeddedCheckout = dynamic(
  () =>
    import("@crossmint/client-sdk-react-ui").then(
      (mod) => mod.CrossmintEmbeddedCheckout
    ),
  {
    loading: () => <div>Loading payment checkout...</div>,
    ssr: false,
  }
);

export default function PaymentComponent() {
  return (
    <CrossmintEmbeddedCheckout
      payment={{
        crypto: {
          enabled: true,
        },
        fiat: {
          enabled: true,
        },
      }}
      lineItems={{
        collectionLocator: `crossmint:${collectionId}`,
        callData: {
          totalPrice: "0.01",
        },
      }}
    />
  );
}
