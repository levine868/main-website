import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands",
};

export default function Brands() {
    return (
        <main className="flex-1">
            <a href="https://studios.lev868.dynv6.net" target="_blank" className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-2xl mb-3">Lev868 Studios</h2>
                    <p className="text-gray-400 space-y-1">For game development</p>
                </div>
                <Image src="/s_logo_circle.png" alt="Lev868 Studios Image" width={100} height={100} />
            </a>
            <a href="https://transit.lev868.dynv6.net" target="_blank" className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-2xl mb-3">Lev Transit</h2>
                    <p className="text-gray-400 space-y-1">Our Roblox: Croydon custom company</p>
                </div>
                <Image src="/t_logo_circle.png" alt="Lev Transit Image" width={100} height={100} />
            </a>
        </main>
    );
}