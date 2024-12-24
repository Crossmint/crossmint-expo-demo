# Crossmint SDK React Native Demo

This demo showcases the [Crossmint SDK](https://github.com/Crossmint/crossmint-sdk) running in React Native using Expo's [DOM Components](https://docs.expo.dev/guides/dom-components/).

## Overview

- Proof of concept demonstrating Crossmint SDK web components in React Native
- Leverages Expo's DOM Components and WebView for rendering
- Not production-ready - use as reference implementation only

## Features

- Embedded Checkout integration
- Wallet management
- DOM Components rendering of web SDK

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables to `.env`:

   ```bash
   # payments
   EXPO_PUBLIC_CLIENT_COLLECTION_API_KEY="PAYMENT_CLIENT_API_KEY"
   EXPO_PUBLIC_COLLECTION_ID="COLLECTION_ID"

   # wallets
   EXPO_PUBLIC_CLIENT_WALLET_API_KEY="WALLET_CLIENT_API_KEY"
   ```

3. Run the app

   ```bash
   npx expo start
   ```

## Limitations

- Limited functionality compared to web SDK.
- Some features may not work as expected.
- WebView and DOM component restrictions apply.
- Apple Pay integration requires additional setup.

## Implementation Notes

- Uses Expo's DOM Components to render web SDK
- WebView handles web component integration
- Minimal styling matches native UI
- Reference implementation only

## Disclaimer

This is an experimental proof of concept. Do not use in production.