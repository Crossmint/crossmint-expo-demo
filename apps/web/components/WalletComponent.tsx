"use client";

import { useAuth, useWallet } from "@crossmint/client-sdk-react-ui";
import dynamic from "next/dynamic";

const EmbeddedAuthForm = dynamic(
  () =>
    import("@crossmint/client-sdk-react-ui").then(
      (mod) => mod.EmbeddedAuthForm
    ),
  {
    loading: () => <div>Loading authentication form...</div>,
    ssr: false,
  }
);

function AuthButton() {
  const { logout, jwt } = useAuth();

  return (
    <div className="flex justify-center items-center w-full max-w-md mx-auto p-4">
      {!jwt ? (
        <div className="w-full">
          <EmbeddedAuthForm />
        </div>
      ) : (
        <button
          type="button"
          onClick={logout}
          className="flex items-center justify-center w-full sm:w-[200px] h-[52px] rounded-xl bg-[#00C853] text-white font-medium text-base transition-opacity hover:opacity-90"
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
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto rounded-lg bg-white shadow-sm">
      {status === "loading-error" && error && (
        <div className="text-red-500 p-3 bg-red-50 rounded-lg w-full text-center">
          Error: {error}
        </div>
      )}
      {status === "in-progress" && (
        <div className="text-gray-600 animate-pulse">Loading wallet...</div>
      )}
      {status === "loaded" && wallet && (
        <div className="break-all text-gray-700 font-mono bg-gray-50 p-3 rounded-lg w-full text-center">
          {wallet.getAddress()}
        </div>
      )}
      {status === "not-loaded" && (
        <div className="text-gray-500 italic">Wallet not loaded</div>
      )}
    </div>
  );
}

export default function WalletComponent() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto p-4">
      <AuthButton />
      <Wallet />
    </div>
  );
}
