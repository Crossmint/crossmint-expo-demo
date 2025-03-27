"use client";

import {
  useAuth,
  useWallet,
  EmbeddedAuthForm,
} from "@crossmint/client-sdk-react-ui";

function AuthButton() {
  const { logout, jwt } = useAuth();

  return (
    <div className="flex justify-center mb-6">
      {!jwt ? (
        <EmbeddedAuthForm />
      ) : (
        <button
          type="button"
          onClick={logout}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
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
    <div className="text-center p-5 text-gray-600">
      {status === "loading-error" && error && (
        <div className="text-red-500">Error: {error}</div>
      )}
      {status === "in-progress" && <div>Loading...</div>}
      {status === "loaded" && wallet && (
        <div>Wallet: {wallet.getAddress()}</div>
      )}
      {status === "not-loaded" && <div>Wallet not loaded</div>}
    </div>
  );
}

export default function WalletsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">Crossmint Wallet</h1>
      <AuthButton />
      <Wallet />
    </div>
  );
}
