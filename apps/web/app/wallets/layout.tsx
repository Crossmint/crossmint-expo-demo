"use client";

import WalletProvider from "@/components/providers/WalletProvider";

export default function WalletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WalletProvider>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </WalletProvider>
  );
}
