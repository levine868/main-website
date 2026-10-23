import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
    title: "Verify Email",
};

export default function VerifyEmail() {
    return (
        <main className="flex-1">
            <Main />
        </main>
    )
}