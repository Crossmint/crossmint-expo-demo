# Crossmint Expo Demo

A comprehensive demonstration of integrating Crossmint's Payments and Wallets SDK with React Native + Expo using WebView and DOM Components.

## Overview

This monorepo showcases two different approaches to integrating Crossmint's SDK in a React Native environment:

1. **WebView Integration**: Traditional approach using WebView to embed Crossmint's web components
2. **DOM Components Integration**: Experimental approach using Expo's DOM Components for native-like performance

## Project Structure

```
crossmint-expo-demo/
├── apps/
│   ├── mobile/     # Expo React Native app
│   └── web/        # Web app to be embedded
```

## Features

- **Mobile App (Expo)**
  - Embedded Crossmint Checkout integration
  - Wallet management
  - Two integration approaches:
    - WebView-based integration
    - DOM Components-based integration (experimental)

- **Web App**
  - Standalone web implementation
  - Can be embedded in the mobile app
  - Demonstrates Crossmint SDK's web capabilities

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Add environment variables to `.env` in the mobile app:

   ```bash
   # payments
   EXPO_PUBLIC_CLIENT_COLLECTION_API_KEY="PAYMENT_CLIENT_API_KEY"
   EXPO_PUBLIC_COLLECTION_ID="COLLECTION_ID"

   # wallets
   EXPO_PUBLIC_CLIENT_WALLET_API_KEY="WALLET_CLIENT_API_KEY"
   ```

3. Run the mobile app:

   ```bash
   cd apps/mobile
   pnpm mobile:ios
   ```

4. Run the web app:

   ```bash
   cd apps/web
   pnpm web:dev
   ```

## Integration Approaches

### 1. WebView Integration
The traditional approach using WebView to embed Crossmint's web components. This provides a reliable way to integrate the SDK but may have performance overhead.

### 2. DOM Components Integration (Experimental)
Using Expo's [DOM Components](https://docs.expo.dev/guides/dom-components/), this approach offers:
- Better performance through native-like rendering
- Direct access to native features
- Seamless integration with React Native components
- Reduced WebView overhead

## Technical Notes

- The mobile app demonstrates both integration approaches
- The web app serves as a reference implementation
- DOM Components integration is experimental and may have limitations
- Apple Pay integration requires additional setup

## Development

This is a monorepo using pnpm workspaces. Key commands:

```bash
# Install all dependencies
pnpm install

# Run mobile app
pnpm mobile:ios

# Run web app
pnpm web:dev
```

## Disclaimer

The DOM Components integration is experimental and should be used for reference only. For production applications, we recommend using the WebView integration approach until DOM Components support is more mature.