"use dom";

import { useAuth } from "@crossmint/client-sdk-react-ui";

export default function AuthButton({
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
