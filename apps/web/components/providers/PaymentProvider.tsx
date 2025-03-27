"use client";

import {
  CrossmintProvider,
  CrossmintCheckoutProvider,
} from "@crossmint/client-sdk-react-ui";

const clientApiKey = process.env
  .NEXT_PUBLIC_CLIENT_COLLECTION_API_KEY as string;

if (!clientApiKey) {
  throw new Error("NEXT_PUBLIC_CLIENT_COLLECTION_API_KEY is not set");
}

export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CrossmintProvider apiKey={clientApiKey}>
      <CrossmintCheckoutProvider>{children}</CrossmintCheckoutProvider>
    </CrossmintProvider>
  );
}
