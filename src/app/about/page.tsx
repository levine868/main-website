export default function About() {
  return (
    <main className="flex-1 bg-gray-950 px-6 py-16 space-y-10">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold">About Lev868</h1>
        <p className="text-gray-400 mt-4">Building modern, IPv6-first solutions for the future of the internet.</p>
      </section>

      <section className="bg-gray-900 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg">
        <h2 className="text-white font-semibold text-2xl mb-3">Who we are</h2>
        <p className="text-gray-400">We are a small group focused on improving the internet through IPv6-firstinfrastructure and self-hosted services.
        </p>
      </section>

      <section className="bg-gray-900 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg">
        <h2 className="text-white font-semibold text-2xl mb-3">Our Mission</h2>
        <p className="text-gray-400">Our goal is to make modern, scalable services accessible by prioritising IPv6 and reducing reliance on older systems.</p>
      </section>

      <section className="bg-gray-900 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg">
        <h2 className="text-white font-semibold text-2xl mb-3">About the Owner</h2>
        <div className="space-y-1 text-gray-400">
          <p>I’m a solo software engineer based in London, building and experimenting with self-hosted infrastructure.</p>
          <p>I aim to run services efficiently using low-cost hardware and modern technologies like IPv6.</p>
          <p>Many independent developers face similar challenges, and I want to makeit easier for them to build and host their own solutions.</p>
        </div>
      </section>

    </main>
  );
}