import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Crossmint Demo</h1>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          href="/wallets"
          className="flex items-center justify-center w-full sm:w-[200px] h-[52px] rounded-xl bg-[#00C853] text-white font-medium text-base transition-opacity hover:opacity-90"
        >
          Wallets
        </Link>
        <Link
          href="/payments"
          className="flex items-center justify-center w-full sm:w-[200px] h-[52px] rounded-xl border-2 border-[#00C853] text-[#00C853] bg-transparent hover:bg-[#00C853]/5 transition-colors font-medium text-base"
        >
          Payments
        </Link>
      </div>
    </div>
  );
}
