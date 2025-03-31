/**
 * Setup fetch interceptor to add Origin header to Crossmint API requests
 */

import { crossmintOriginUrl } from "@/src/utils/config";

const originalFetch = global.fetch;
global.fetch = async (input, initOptions) => {
  let url = "";
  if (typeof input === "string") {
    url = input;
  } else if (input instanceof Request) {
    url = input.url;
  } else if (input instanceof URL) {
    url = input.toString();
  }

  // Only add headers to Crossmint API requests
  if (url.includes("crossmint.com")) {
    const newInit = { ...initOptions };
    newInit.headers = {
      ...newInit.headers,
      // Use configurable origin URL
      Origin: crossmintOriginUrl,
    };
    console.log("newInit", newInit);
    console.log("Adding Origin header to Crossmint request:", url);
    return originalFetch(input, newInit);
  }

  return originalFetch(input, initOptions);
}; 