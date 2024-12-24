"use dom";

import { useWallet } from "@crossmint/client-sdk-react-ui";

export default function Wallet() {
  const { wallet, status, error } = useWallet();

  return (
    <div>
      {status === "loading-error" && error && <div>Error: {error.message}</div>}
      {status === "in-progress" && <div>Loading...</div>}
      {status === "loaded" && wallet && <div>Wallet: {wallet.address}</div>}
      {status === "not-loaded" && <div>Wallet not loaded</div>}
    </div>
  );
}
