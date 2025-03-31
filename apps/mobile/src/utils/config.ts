export const collectionApiKey = process.env
  .EXPO_PUBLIC_CLIENT_COLLECTION_API_KEY as string;
export const walletApiKey = process.env
  .EXPO_PUBLIC_CLIENT_WALLET_API_KEY as string;
export const collectionId = process.env.EXPO_PUBLIC_COLLECTION_ID as string;

export const crossmintOriginUrl =
  process.env.EXPO_PUBLIC_CROSSMINT_ORIGIN_URL ??
  "https://crossmint-expo-demo-web.vercel.app/";

if (!collectionApiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_COLLECTION_API_KEY is not set");
}

if (!walletApiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_WALLET_API_KEY is not set");
}

if (!collectionId) {
  throw new Error("EXPO_PUBLIC_COLLECTION_ID is not set");
}
