"use client"

import "./globals.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-800 bg-gray-900">
          <div className="px-6 h-16 flex items-center justify-between relative">
            <div className="flex items-center space-x-2">
              <Image src="/logo_circle.png" alt="Logo" width={26} height={26}/>
              <h1 className="font-bold text-2xl text-white">Lev868</h1>
            </div>

            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">
              <Link href="/" className="text-white text-xl">Home</Link>
              <Link href="/about" className="text-white text-xl">About</Link>
              <Link href="/brands" className="text-white text-xl">Brands</Link>
              <Link href="/help" className="text-white text-xl">Help</Link>
            </nav>

            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white text-xl">Log In</Link>
              <Link href="/" className="text-white text-xl bg-sky-700 rounded-lg px-3 py-1">Sign Up</Link>
            </nav>

            <button className="md:hidden text-2xl text-white right-1" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="px-6 pb-4 flex flex-col space-y-4">
              <Link href="/" className="text-white text-xl">Home</Link>
              <Link href="/about" className="text-white text-xl">About</Link>
              <Link href="/brands" className="text-white text-xl">Brands</Link>
              <Link href="/help" className="text-white text-xl">Help</Link>
              <hr className="text-white"/>
              <Link href="/" className="text-white text-xl">Log In</Link>
              <Link href="/" className="text-white text-xl bg-sky-700 rounded-lg px-3 py-1 text-center">Sign Up</Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 border-t border-gray-800 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div>
              <h2 className="text-white font-semibold text-lg">Lev868</h2>
              <p className="mt-2">Leading IPv6 for all.</p>
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
