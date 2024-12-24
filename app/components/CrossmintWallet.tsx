"use dom";

import {
  CrossmintAuthProvider,
  CrossmintProvider,
  useAuth,
  useWallet,
} from "@crossmint/client-sdk-react-ui";

function AuthButton({
  onLogin,
  onLogout,
}: {
  onLogin?: () => void;
  onLogout?: () => void;
}) {
  const { login, logout, jwt } = useAuth();

  return (
    <div>
      {jwt == null ? (
        <button
          type="button"
          onClick={() => {
            login();
            onLogin?.();
          }}
        >
          Login
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            logout();
            onLogout?.();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

function Wallet() {
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
