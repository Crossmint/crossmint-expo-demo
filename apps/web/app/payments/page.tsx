"use client";

import { CrossmintEmbeddedCheckout } from "@crossmint/client-sdk-react-ui";

const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;

if (!collectionId) {
  throw new Error("NEXT_PUBLIC_COLLECTION_ID is not set");
}

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">
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
      </h1>
    </div>
  );
}
