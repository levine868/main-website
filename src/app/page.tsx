import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lev868",
};

export default function Home() {
  return (
    <main className="bg-gray-950 flex-1">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl font-bold">Lev868</h1>
        <h2 className="text-white text-3xl mt-4">Fixing the future by IPv6</h2>
        <Link href="/brands" className="mt-32 text-white text-2xl bg-sky-900 rounded-lg px-4 py-2 font-bold">Our Brands</Link>
        <div className="absolute bottom-2 text-gray-400 text-sm opacity-70">↓ Scroll for more info</div>
      </section>

      <section className="text-center">
        <div className="bg-gray-900 rounded-xl mx-auto max-w-5xl px-3 py-3">
          <h1 className="text-white font-bold text-2xl">Why IPv6?</h1>
          <p className="text-white">
            IPv4 <s>is running out</s> has run out of addresses. The solution? NAT. It allows
            for a public and private system, in which only people on the same network can access
            the private IP. This means that you need your own public IP, which ISPs usually charge
            extra for. IPv6 has plenty of addresses, enough to give each atom on earth is own address
            and still have plenty spare. Therefore, no NAT system is needed, allowing for free hosting
            that consumers can access.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl mx-auto max-w-5xl px-3 py-3 mt-5">
          <h1 className="text-white font-bold text-2xl">Why don't we all use IPv6?</h1>
          <p className="text-white">
            Not every person has IPv6, meaning IPv6-only will leave millions of people without accesss to major pages, so many
            businesses choose to stay with IPv4 or a dual stack system. This still leaves developers having the need to pay
            for their own public IPv4 address. The more businesses that use IPv6, the more of the need for consumers to switch
            to IPv6 and therefore speeding up the process. By supporting our business, you are helping to get the world connected
            to IPv6 and support small developers with a smaller operating costs.
          </p>
        </div>
      </section>
    </main>
  );
}