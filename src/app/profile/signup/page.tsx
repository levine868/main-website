import { Metadata } from "next";
import Form from "./form";
import OAuthForm from "../oauthForm";

export const metadata: Metadata = {
    title: "Sign Up",
};

export default function SignUp() {
    return (
        <main className="flex-1 px-6 min-h-screen">
            <Form />
            <hr className="text-gray-500 mt-5" />
            <OAuthForm />
        </main>
    );
}