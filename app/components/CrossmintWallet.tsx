"use dom";

import AuthButton from "@/app/components/AuthButton";
import Wallet from "@/app/components/Wallet";
import {
  CrossmintAuthProvider,
  CrossmintProvider,
} from "@crossmint/client-sdk-react-ui";

export default function CrossmintWallet({
  apiKey,
}: {
  apiKey: string;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <CrossmintProvider apiKey={apiKey}>
      <CrossmintAuthProvider
        embeddedWallets={{
          type: "evm-smart-wallet",
          defaultChain: "base-sepolia",
          createOnLogin: "all-users",
        }}
      >
        <main>
          <div>
            <AuthButton />
          </div>
          <div>
            <Wallet />
          </div>
        </main>
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
