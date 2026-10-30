import type { Metadata } from "next";
import Card from "../../../lib/card";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile() {
    return (
        <main className="flex-1 px-6">
            <Card
                title="Details"
                details={[
                    <>IPv6 <s>is running out</s> has run out of addresses.</>,
                    <>ISPs charge for a public IPv4 address</>,
                    <>Lorem ipsum</>
                ]}
            ></Card>
            <section className="bg-gray-950 rounded-2xl max-w-5xl mx-auto p-8 shadow-lg mt-10 border-2 border-sky-950 ease-in-out hover:border-sky-900 duration-100"> {/* BORDER */}
                <h2 className="text-white font-semibold text-2xl mb-3">Details</h2>
                <div className="text-gray-400 space-y-1">
                <p>IPv6 <s>is running out</s> has run out of addresses.</p>
                <p>ISPs charge for a public IPv4 address</p>
                <p>There are plenty of IPv6 addressses, so your own IP is free to own.</p>
                </div>
            </section>

            <section className="bg-gray-900 group hover:bg-sky-950 hover:max-w-6xl rounded-2xl max-w-5xl mx-auto p-8 shadow-lg mt-10 border-2 ease-in-out border-sky-950 hover:border-sky-900 duration-100">
                <h2 className="text-white font-semibold text-2xl group-hover:text-3xl mb-3 ease-in-out duration-100">Why not only use IPv6</h2>
                <div className="text-gray-400 space-y-1 group-hover:text-lg ease-in-out duration-100">
                <p>Not all consumers have an IPv6 address</p>
                <p>Potential customer pool will be smaller</p>
                <p>Using legacy systems is the only way around this</p>
                <p>If enough businesses use IPv6 only, the world will entirely switch to IPv6</p>
                </div>
            </section>
        </main>
    )
}