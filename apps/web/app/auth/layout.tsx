"use client";

import AuthProvider from "@/components/providers/AuthProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="container mx-auto px-4 py-8">{children}</div>
    </AuthProvider>
  );
}
