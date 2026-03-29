import "./globals.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-gray-950 flex-1">
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-white text-5xl font-bold">Error 404</h1>
                <h2 className="text-white text-3xl mt-4">Page not Found</h2>
                <Link href="/" className="mt-32 text-white text-2xl bg-sky-900 rounded-lg px-4 py-2 font-bold">Go Home</Link>
            </section>
        </main>
    );
}