"use client"

import { useSearchParams } from "next/navigation";

export default function Main() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-5xl font-bold">Hello, {name || "Welcome"}</h1>
            <h2 className="text-white text-3xl mt-4">Check your emails to verify your account</h2>
        </section>
    )
}