import useWallet from "@/app/hooks/useWallet";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import type { GestureResponderEvent } from "react-native";
import { useCallback } from "react";

interface WalletProps {
  jwt: string;
}

function ErrorView({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>Error</Text>
      <Text style={styles.errorText}>{message}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Wallet({ jwt }: WalletProps) {
  const {
    wallet,
    isLoading,
    isLoadingService,
    isLoadingWallet,
    error,
    isError,
    serviceError,
    walletError,
    isConnected,
    reload,
  } = useWallet(
    "solana-smart-wallet",
    {
      adminSigner: undefined,
      linkedUser: undefined,
    },
    jwt
  );

  const handleReload = useCallback(
    (_event?: GestureResponderEvent) => {
      reload();
    },
    [reload]
  );

  if (isError) {
    const errorMessage =
      error?.message ||
      (serviceError
        ? "Failed to initialize wallet service"
        : walletError
        ? "Failed to load wallet"
        : "Unknown error");

    return (
      <View style={styles.container}>
        <ErrorView message={errorMessage} onRetry={handleReload} />
      </View>
    );
  }

  if (isLoading) {
    const loadingMessage = isLoadingService
      ? "Initializing wallet service..."
      : isLoadingWallet
      ? "Loading wallet..."
      : "Processing...";

    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>{loadingMessage}</Text>
      </View>
    );
  }

  if (!isConnected || !wallet) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.infoText}>Wallet not connected</Text>
        <TouchableOpacity style={styles.connectButton} onPress={handleReload}>
          <Text style={styles.connectButtonText}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Wallet Information</Text>
        <Text style={styles.infoText}>Address: {wallet.getAddress()}</Text>
        <Text style={styles.infoText}>Type: Solana Smart Wallet</Text>
        <Text style={styles.infoText}>Status: Active</Text>

        <TouchableOpacity style={styles.refreshButton} onPress={handleReload}>
          <Text style={styles.refreshButtonText}>Refresh Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  infoContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorContainer: {
    backgroundColor: "#ffebee",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#2196f3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  retryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  refreshButton: {
    marginTop: 16,
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  refreshButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  connectButton: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#2196f3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  connectButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
