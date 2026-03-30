import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lev868",
};

export default function Home() {
  return (
    <main className="flex-1">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl font-bold">Lev868</h1>
        <h2 className="text-white text-3xl mt-4">Fixing the future by IPv6</h2>
        <Link href="/brands" className="mt-32 text-white text-2xl bg-sky-900 rounded-lg px-4 py-2 font-bold">Our Brands</Link>
        <div className="absolute bottom-2 text-gray-400 text-sm opacity-70">↓ Scroll for more info</div>
      </section>

      <section className="bg-gray-900 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg">
        <h2 className="text-white font-semibold text-2xl mb-3">Why IPv6</h2>
        <div className="text-gray-400 space-y-1">
          <p>IPv6 <s>is running out</s> has run out of addresses.</p>
          <p>ISPs charge for a public IPv4 address</p>
          <p>There are plenty of IPv6 addressses, so your own IP is free to own.</p>
        </div>
      </section>

      <section className="bg-gray-900 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg mt-10">
        <h2 className="text-white font-semibold text-2xl mb-3">Why not only use IPv6</h2>
        <div className="text-gray-400 space-y-1">
          <p>Not all consumers have an IPv6 address</p>
          <p>Potential customer pool will be smaller</p>
          <p>Using legacy systems is the only way around this</p>
          <p>If enough businesses use IPv6 only, the world will entirely switch to IPv6</p>
        </div>
      </section>
    </main>
  );
}