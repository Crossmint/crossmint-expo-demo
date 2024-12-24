import CrossmintCheckout from "@/app/components/CrossmintCheckout";

const apiKey = process.env.EXPO_PUBLIC_CLIENT_API_KEY as string;
const collectionId = process.env.EXPO_PUBLIC_COLLECTION_ID as string;

if (!apiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_API_KEY is not set");
}

if (!collectionId) {
  throw new Error("EXPO_PUBLIC_COLLECTION_ID is not set");
}

export default function CheckoutPage() {
  return (
    <CrossmintCheckout
      apiKey={apiKey}
      collectionId={collectionId}
      dom={{
        // enableApplePay: true,
        scrollEnabled: false,
      }}
    />
  );
}
