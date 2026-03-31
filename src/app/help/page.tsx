import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help"
};

export default function Help() {
    return (
        <main className="flex-1 min-h-screen">
            <section className="flex flex-col items-center justify-center text-center px-6 mt-15">
                <h1 className="text-white text-4xl font-bold">Our Contact Details</h1>
                <h2 className="text-white text-2xl mt-4">Feel free to contact us if you need help</h2>
                <p className="text-gray-400 text-xl mt-10">Email: enquires@lev868-studios.dynv6.net</p>
                <p className="text-gray-400 text-xl">Discord: <a href="https://socials.lev868.dynv6.net/discord" target="_blank">https://socials.lev868.dynv6.net/discord</a></p>
            </section>
        </main>
    );
}