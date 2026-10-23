"use client"

import { useState, useRef } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Form() {
    const [captchaToken, setCaptchaToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");

    const turnstileRef = useRef<TurnstileInstance>(null);
    const router = useRouter();

    async function handleLogin() {
        if (!email || !password) {
            return setMessage("Make sure all fields are filled");
        }

        if (!captchaToken) {
            return setMessage("Make sure the captcha is completed");
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
            options: {
                captchaToken: captchaToken,
            },
        })

        if (error) {
            setMessage(error.message);
            return turnstileRef.current?.reset();
        }

        if (!data.user) {
            setMessage("Login failed");
            return turnstileRef.current?.reset();
        }

        router.push("/profile");
    }

    return (
        <div className="px-6 items-center justify-center flex-col flex">
            <h1 className="text-white text-5xl font-bold text-center mt-6">Log In</h1>

            <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-10 rounded-md w-[300px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />

            <div className="relative">
                <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-2 rounded-md w-[300px]"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {if (e.key == "Enter") {handleLogin()}}}
                placeholder="Password"
                required
                />

                <button
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute top-1/2 -translate-y-1/3 right-2 text-gray-500 hover:text-gray-700 active:text-gray-800"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                >
                    {isVisible ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                </button>
            </div>

            <p className={`text-gray-500 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>Caution: Password Visible!</p>

            <button className="text-white bg-sky-600 rounded-lg text-xl px-2 py-1 mt-2 font-semibold w-[100px] hover:bg-sky-800 active:bg-sky-950"
                onClick={handleLogin}>
                Log In
            </button>

            <p className="text-gray-500 mt-1">{message}</p>

            <Turnstile
                ref={turnstileRef}
                siteKey="0x4AAAAAADkYPiSPqrjL05KO"
                onSuccess={(token) => {
                setCaptchaToken(token)
                }}
                className="mt-5"
            />
        </div>
    )
}