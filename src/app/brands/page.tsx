import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands",
};

export default function Brands() {
    return (
        <main className="flex-1 min-h-screen px-6">
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
                <Image src="/logo_circle.png" alt="Lev Transit Image" width={100} height={100} />
            </a>
            <a href="https://projecttransport.pages.dev/" target="_blank" className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-2xl mb-3">Project Transport</h2>
                    <p className="text-gray-400 space-y-1">Our company, equally joint with SB Designs and TurquoiseTNT</p>
                </div>
                <Image src="/pt_logo_circle.png" alt="Project Transport Image" width={100} height={100} />
            </a>

            <h1 className="text-white font-semibold text-4xl max-w-lg mx-auto mt-15 flex justify-center">Partners</h1>
            <a href="https://sbdesigns.is-a.dev" target="_blank" className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-2xl mb-3">SB Designs</h2>
                    <p className="text-gray-400 space-y-1">Together, we work for greatness</p>
                </div>
                <Image src="/sb_logo.png" alt="SB Designs Image" width={100} height={100} />
            </a>
            <a href="https://turquoisetnt.one/" target="_blank" className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-2xl mb-3">TurquoiseTNT</h2>
                    <p className="text-gray-400 space-y-1">Working closly with them behind the scenes</p>
                </div>
                <Image src="/tnt_logo.svg" alt="TurquoiseTNT Image" width={100} height={100} />
            </a>
        </main>
    );
}