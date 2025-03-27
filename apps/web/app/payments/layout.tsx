"use client";

import PaymentProvider from "@/components/providers/PaymentProvider";

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PaymentProvider>
      <div className="container mx-auto px-4 py-8">{children}</div>
    </PaymentProvider>
  );
}
