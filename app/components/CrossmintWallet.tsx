"use dom";

import Button from "@/app/components/ui/Button";
import {
  CrossmintAuthProvider,
  CrossmintProvider,
  useAuth,
  useWallet,
} from "@crossmint/client-sdk-react-ui";

function AuthButton() {
  const { login, logout, jwt } = useAuth();

  return (
    <div>
      {!jwt ? (
        <Button onClick={login}>Login</Button>
      ) : (
        <Button onClick={logout} variant="secondary">
          Logout
        </Button>
      )}
    </div>
  );
}

function Wallet() {
  const { wallet, status, error } = useWallet();

  const textStyle = {
    fontSize: "16px",
    textAlign: "center" as const,
    padding: "20px",
    color: "#666",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {status === "loading-error" && error && (
        <div style={{ ...textStyle, color: "red" }}>Error: {error}</div>
      )}
      {status === "in-progress" && <div style={textStyle}>Loading...</div>}
      {status === "loaded" && wallet && (
        <div style={textStyle}>Wallet: {wallet.getAddress()}</div>
      )}
      {status === "not-loaded" && (
        <div style={textStyle}>Wallet not loaded</div>
      )}
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
          type: "solana-smart-wallet",
          createOnLogin: "all-users",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            height: "100%",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Crossmint Wallet
          </h1>
          <AuthButton />
          <Wallet />
        </div>
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
