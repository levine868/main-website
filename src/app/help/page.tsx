import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help"
};

export default function Help() {
    return (
        <main className="flex-1">
            <section className="flex flex-col items-center justify-center text-center px-6 mt-5">
                <h1 className="text-white text-4xl font-bold">Our Contact Details</h1>
                <h2 className="text-white text-2xl mt-4">Feel free to contact us if you need help</h2>
                <p className="text-gray-400 text-xl mt-10">Email: enquires@lev868-studios.dynv6.net</p>
            </section>
        </main>
    );
}