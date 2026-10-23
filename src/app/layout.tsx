"use client"

import "./global.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [signed, setSigned] = useState(false);
  const [username, setUsername] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setSigned(!!user);
      const meta = user?.user_metadata
      if (meta?.username) {
        setUsername(meta.username);
      }
    }
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSigned(!!session?.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function signout() {
    supabase.auth.signOut({ scope: "local" });
  }

  return (
    <html lang="en">
      <body className="bg-gray-950 min-h-screen flex flex-col">
        <header className="border-b border-gray-800 bg-gray-900">
          <div className="px-6 h-16 flex items-center justify-between relative">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo_circle.png" alt="Logo" width={26} height={26}/>
              <h1 className="font-bold text-2xl text-white">Lev868</h1>
            </Link>

            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">
              <Link href="/" className="text-white text-xl">Home</Link>
              <Link href="/about" className="text-white text-xl">About</Link>
              <Link href="/brands" className="text-white text-xl">Brands</Link>
              <Link href="/help" className="text-white text-xl">Help</Link>
            </nav>

            <nav className="hidden md:flex space-x-6">
              <Link href="/profile/login" className={`text-white text-xl py-1 ${signed ? "hidden" : ""}`}>Log In</Link>
              <Link href="/profile/signup" className={`text-white text-xl bg-sky-600 rounded-lg px-2 py-1 hover:bg-sky-800 active:bg-sky-950 ${signed ? "hidden": ""}`}>Sign Up</Link>
            </nav>

            <button className={`text-gray-400 text-xl hidden py-1 md:flex ${signed ? "" : "hidden"}`} onClick={() => setProfile(!profile)}><User />{username}</button>

            <div ref={profileRef} className={`transition-all right-5 origin-top flex flex-col top-21 w-50 p-2 rounded-xl bg-gray-900 absolute overflow-hidden duration-300 ${profile ? "max-h-96 opacity-100 scale-y-100" : "scale-y-0 max-h-0 opacity-0"}`}>
              <Link href="/profile" className="text-white flex"><User />Profile</Link>
              <button onClick={signout} className="text-red-500 text-left mt-1 flex"><LogOut />Sign Out</button>
            </div>

            <button className="md:hidden text-2xl text-white right-1" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-6 pb-4 flex flex-col space-y-4">
              <Link href="/" className="text-white text-xl">Home</Link>
              <Link href="/about" className="text-white text-xl">About</Link>
              <Link href="/brands" className="text-white text-xl">Brands</Link>
              <Link href="/help" className="text-white text-xl">Help</Link>
              <hr className="text-white"/>
              <Link href="/profile" className={`text-gray-400 text-xl py-1 flex ${signed ? "" : "hidden"}`}><User />{username}</Link>
              <Link href="/profile/login" className={`text-white text-xl ${signed ? "hidden": ""}`}>Log In</Link>
              <Link href="/profile/signup" className={`text-white text-xl bg-sky-600 rounded-lg px-3 py-1 text-center hover:bg-sky-800 active:bg-sky-950 ${signed ? "hidden": ""}`}>Sign Up</Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 border-t border-gray-800 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div>
              <h2 className="text-white font-semibold text-lg">Lev868</h2>
              <p className="mt-2">Helping the worldwide community</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/">Home</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/tos">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-4">
            © {new Date().getFullYear()} Lev868. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
