import type { WalletTypeToArgs } from "@crossmint/wallets-sdk";
import { useQuery } from "@tanstack/react-query";
import { CrossmintWallets } from "@crossmint/wallets-sdk";
import { walletApiKey } from "@/src/utils/config";

export default function useWallet<T extends keyof WalletTypeToArgs>(
  type: T,
  args: WalletTypeToArgs[T],
  jwt?: string
) {
  const { data: walletsService } = useQuery({
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

  const { data: wallet } = useQuery({
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
        return null;
      }
    },
    enabled: !!walletsService,
  });

  return {
    walletsService,
    wallet,
  };
}
