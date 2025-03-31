"use client";

import {
  CrossmintProvider,
  CrossmintAuthProvider,
} from "@crossmint/client-sdk-react-ui";

const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_WALLET_API_KEY as string;

if (!clientApiKey) {
  throw new Error("NEXT_PUBLIC_CLIENT_WALLET_API_KEY is not set");
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CrossmintProvider apiKey={clientApiKey}>
      <CrossmintAuthProvider
        loginMethods={["email", "google", "twitter", "farcaster"]}
        embeddedWallets={{
          type: "solana-smart-wallet",
          createOnLogin: "all-users",
        }}
      >
        {children}
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
