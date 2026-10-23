import { Metadata } from "next";
import Form from "./form";
import OAuthForm from "../oauthForm";

export const metadata: Metadata = {
    title: "Log In",
};

export default function Login() {
    return (
        <main className="bg-gray-950 flex-1">
            <Form />
                <hr className="text-gray-500 mt-5" />
            <OAuthForm />
        </main>
    )
}