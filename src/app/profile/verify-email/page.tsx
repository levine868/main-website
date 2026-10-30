import { Metadata } from "next";
import Main from "./main";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Verify Email",
};

export default function VerifyEmail() {
    return (
        <main className="flex-1">
            <Suspense fallback={
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-5xl font-bold">Hello, Welcome!</h1>
                    <h2 className="text-white text-3xl mt-4">Check your emails to verify your account</h2>
                </section>
            }>
                <Main />
            </Suspense>
        </main>
    )
}