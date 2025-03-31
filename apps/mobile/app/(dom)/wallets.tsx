import CrossmintWallet from "@/app/components/web/CrossmintWallet";
import { walletApiKey } from "@/src/utils/config";

export default function WalletsPage() {
  return (
    <CrossmintWallet
      apiKey={walletApiKey}
      dom={{
        enableApplePay: true,
        originWhitelist: ["*"],
        scrollEnabled: false,
      }}
    />
  );
}
