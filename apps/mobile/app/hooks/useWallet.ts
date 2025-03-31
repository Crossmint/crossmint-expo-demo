import type { WalletTypeToArgs } from "@crossmint/wallets-sdk";
import { useQuery } from "@tanstack/react-query";
import { CrossmintWallets } from "@crossmint/wallets-sdk";
import { useState, useCallback } from "react";
import { walletApiKey } from "@/src/utils/config";

interface SignableWallet {
  signMessage(message: string): Promise<string>;
}

function isSignableWallet(wallet: unknown): wallet is SignableWallet {
  return (
    !!wallet &&
    typeof (wallet as { signMessage?: (message: string) => Promise<string> })
      .signMessage === "function"
  );
}

export default function useWallet<T extends keyof WalletTypeToArgs>(
  type: T,
  args: WalletTypeToArgs[T],
  jwt?: string
) {
  const [signLoading, setSignLoading] = useState(false);
  const [signError, setSignError] = useState<Error | null>(null);

  const {
    data: walletsService,
    isLoading: isLoadingService,
    error: serviceError,
    isError: isServiceError,
  } = useQuery({
    queryKey: ["walletsService", jwt],
    queryFn: () => {
      if (!jwt) {
        return null;
      }

      console.log("jwt", jwt);
      return CrossmintWallets.from({
        apiKey: walletApiKey,
        jwt,
      });
    },
    enabled: !!jwt,
  });

  const {
    data: wallet,
    isLoading: isLoadingWallet,
    error: walletError,
    isError: isWalletError,
    refetch: refetchWallet,
  } = useQuery({
    queryKey: ["wallet", type, args, jwt],
    queryFn: async () => {
      if (!walletsService) {
        return null;
      }
      console.log("getting wallet");
      try {
        const result = await walletsService.getOrCreateWallet(type, args);
        console.log("Wallet retrieved successfully");
        return result;
      } catch (error) {
        console.error("Wallet error details:", JSON.stringify(error));
        throw error;
      }
    },
    enabled: !!walletsService,
  });

  const isLoading = isLoadingService || isLoadingWallet || signLoading;
  const error = serviceError ?? walletError ?? signError;
  const isError = isServiceError || isWalletError || !!signError;

  const signMessage = useCallback(
    async (message: string) => {
      if (!wallet) {
        return null;
      }

      setSignLoading(true);
      setSignError(null);

      try {
        if (isSignableWallet(wallet)) {
          const signature = await wallet.signMessage(message);
          return signature;
        }
        throw new Error("Wallet does not support message signing");
      } catch (error) {
        console.error("Error signing message:", error);
        setSignError(error instanceof Error ? error : new Error(String(error)));
        return null;
      } finally {
        setSignLoading(false);
      }
    },
    [wallet]
  );

  return {
    walletsService,
    wallet,

    isLoading,
    isLoadingService,
    isLoadingWallet,
    signLoading,

    error,
    isError,
    serviceError,
    isServiceError,
    walletError,
    isWalletError,
    signError,

    isConnected: !!wallet && !isLoading && !isError,

    reload: refetchWallet,
    signMessage,
  };
}
