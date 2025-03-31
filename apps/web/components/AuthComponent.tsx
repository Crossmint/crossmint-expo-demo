"use client";

import { useAuth } from "@crossmint/client-sdk-react-ui";
import dynamic from "next/dynamic";
import { useEffect } from "react";

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

export default function AuthComponent() {
  const { logout, jwt } = useAuth();

  useEffect(() => {
    if (jwt && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "login_success", jwt })
      );
    }
  }, [jwt]);

  const handleLogout = () => {
    logout();
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "logout" }));
    }
  };

  return (
    <div className="flex justify-center items-center w-full max-w-md mx-auto p-4">
      {!jwt ? (
        <div className="w-full">
          <EmbeddedAuthForm />
        </div>
      ) : (
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center justify-center w-full sm:w-[200px] h-[52px] rounded-xl bg-[#00C853] text-white font-medium text-base transition-opacity hover:opacity-90"
        >
          Logout
        </button>
      )}
    </div>
  );
}
