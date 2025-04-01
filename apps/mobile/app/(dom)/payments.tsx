import CrossmintPayment from "@/app/components/web/CrossmintPayment";
import { collectionApiKey, collectionId } from "@/src/utils/config";

export default function PaymentsPage() {
  return (
    <CrossmintPayment
      apiKey={collectionApiKey}
      collectionId={collectionId}
      dom={{
        // enableApplePay: true,
        originWhitelist: ["*"],
        scrollEnabled: false,
      }}
    />
  );
}
