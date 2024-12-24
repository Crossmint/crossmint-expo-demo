import CrossmintWallet from "@/app/components/CrossmintWallet";

const apiKey = process.env.EXPO_PUBLIC_CLIENT_WALLET_API_KEY as string;

if (!apiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_WALLET_API_KEY is not set");
}

export default function WalletsPage() {
  return (
    <CrossmintWallet
      apiKey={apiKey}
      dom={{
        // enableApplePay: true,
        originWhitelist: ["*"],
        scrollEnabled: false,
      }}
    />
  );
}
