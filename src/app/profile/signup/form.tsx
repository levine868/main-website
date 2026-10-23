"use client";

import { useState, useRef } from "react";
import { supabase } from "../../../../lib/supabase";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { redirect, RedirectType } from "next/navigation"; 

export default function Form() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");
  const [tos, setTos] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const turnstileRef = useRef<TurnstileInstance>(null);

  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  function CriterionItem({ met, text }: { met: boolean; text: string }) {
    return (
      <li className={`flex items-center space-x-2 ${met ? "text-green-600" : "text-gray-500"}`}>
        {met ? (
          <Check className="h-4 w-4 text-green-500 stroke-[3]" />
        ) : (
          <X className="h-4 w-4 text-gray-300 stroke-[2]" />
        )}
        <span className={met ? "line-through opacity-80" : ""}>{text}</span>
      </li>
    );
  }

  function capitalise(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function handleSignup() {
    if (!captchaToken) {
      return setMessage("Make sure captcha is completed first");
    }

    if (!username || !firstName || !lastName || !email || !password || !tos) {
      return setMessage("Make sure all the fields have been entered");
    }
    
    const forename = capitalise(firstName.toLowerCase());
    const surname = capitalise(lastName.toLowerCase());

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: { 
        captchaToken,
        data: {
          username: username,
          firstName: forename,
          lastName: surname
        }
       },
    });

    if (error) {
      setMessage(error.message);
      return turnstileRef.current?.reset();
    } else {
      return redirect(`/profile/verify-email?name=${forename}`, RedirectType.push)
    }
  }

  return (
    <div className="px-6 items-center justify-center flex-col flex">
      <h1 className="text-white text-5xl font-bold text-center mt-6">Sign Up</h1>
      
      <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-10 rounded-md w-[300px]"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />

      <div className="w-[300px] flex space-x-2">
        <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-2 rounded-md w-1/2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />

        <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-2 rounded-md w-1/2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
      </div>

      <input className="text-white bg-gray-900 text-xl px-2 py-1 mt-2 rounded-md w-[300px]"
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
          onKeyDown={(e) => {if (e.key == "Enter") {handleSignup()}}}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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

      <div className={`grid transition-all duration-300 ease-in-out ${isFocused ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
          <ul className="space-y-1.5 text-xs py-1" aria-label="Password requirements">
            <CriterionItem met={criteria.length} text="At least 8 characters long" />
            <CriterionItem met={criteria.uppercase} text="At least one uppercase letter" />
            <CriterionItem met={criteria.lowercase} text="At least one lowercase letter" />
            <CriterionItem met={criteria.number} text="At least one number" />
            <CriterionItem met={criteria.special} text="At least one special character" />
          </ul>
        </div>
      </div>

      <p className="text-gray-500 mt-1">
        <input
          type="checkbox"
          checked={tos}
          onChange={(e) => setTos(e.target.checked)}
          required
        />
        I agree to the <u><a href="/tos" target="_blank">Terms of Service</a></u>
      </p>

      <button className="text-white bg-sky-600 rounded-lg text-xl px-2 py-1 mt-2 font-semibold w-[100px] hover:bg-sky-800 active:bg-sky-950"
        onClick={handleSignup}>
        Sign Up
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
  );
}