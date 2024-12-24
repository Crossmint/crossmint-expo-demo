import CrossmintCheckout from "@/app/components/dom/CrossmintCheckout";

export default function Index() {
  return (
    <CrossmintCheckout
      apiKey="ck_staging_AFW7BixVDxfP1MRangw7ec59tNN1j4eDZocCNHnZgWVH7qpJZDD3Un4gUpLFfSQoxUba8u53nMzSWRWXjCXfJRG3WLPHXgWM1Kk53Sva2k2hxzEEkjU7d7788MHgngwR9pWqYoUwWs2ZSjAuoQJX4fax1hPjHsFGbxGhEw8sWmQiTCjSNkF5Dd6WzZnDZEFAQVNSfc8jS8hnBazQfn1Mn6Kf"
      collectionLocator="crossmint:3f8093f4-db99-4b4a-8bb3-f676d69bc727"
      dom={{
        scrollEnabled: false,
        // enableApplePay: true,
      }}
    />
  );
}
