import { useQuery } from "@tanstack/react-query";
import { Platform } from "react-native";
import * as Device from "expo-device";

interface UserAgentData {
  userAgent: string;
  platform: string;
  osVersion: string;
  modelName: string;
}

async function generateUserAgent(): Promise<UserAgentData> {
  const osVersion = Device.osVersion || "0";
  const modelName = Device.modelName || "Unknown";

  let userAgent: string;

  if (Platform.OS === "ios") {
    userAgent = `Mozilla/5.0 (iPhone; CPU iPhone OS ${osVersion
      .toString()
      .replace(
        /\./g,
        "_"
      )} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${Math.floor(
      Number(osVersion) / 2
    )}.0 Mobile/15E148 Safari/604.1`;
  } else {
    userAgent = `Mozilla/5.0 (Linux; Android ${osVersion}; ${modelName}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36`;
  }

  return {
    userAgent,
    platform: Platform.OS,
    osVersion,
    modelName,
  };
}

export default function useUserAgent() {
  const {
    data: userAgentData,
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userAgent"],
    queryFn: generateUserAgent,
    staleTime: Number.POSITIVE_INFINITY, // User agent rarely changes, so we can cache it indefinitely
  });

  return {
    userAgent: userAgentData?.userAgent,
    platform: userAgentData?.platform,
    osVersion: userAgentData?.osVersion,
    modelName: userAgentData?.modelName,
    isLoading,
    error,
    isError,
    reload: refetch,
  };
}
