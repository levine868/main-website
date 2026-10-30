import type { Metadata } from "next";
import Card from "../../../lib/card";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="flex-1 px-6 py-16">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold">About Lev868</h1>
        <p className="text-gray-400 mt-4">Building modern solutions, to help the internet.</p>
      </section>

      <Card
        title="Who we are"
        details={[
          <>We are a small group of developers, working on various utilities, from games to fictional transport companies.</>
        ]}
      ></Card>

      <Card
        title="Our Mission"
        details={[
          <>Our goal is to make modern, scalable services without overcharging for our services.</>
        ]}
      ></Card>

      <Card
        title="About the Owner"
        details={[
          <>I’m a solo software engineer based in London, building and experimenting with self-hosted infrastructure.</>,
          <>I aim to run services efficiently using low-cost hardware and modern technologies like IPv6 and free cloud-hosting software.</>,
          <>I have a fond interest in transport, and may find a couple pieces of software based on this fact.</>
        ]}
      ></Card>
    </main>
  );
}