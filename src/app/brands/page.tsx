import { BrandCard } from "../../../lib/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands",
};

export default function Brands() {
    return (
        <main className="flex-1 px-6">
            <h1 className="text-white font-semibold text-4xl max-w-lg mx-auto mt-10 flex justify-center">Brands</h1>
            <BrandCard
                title="Lev868 Studios"
                description="For game development"
                src="/s_logo_circle.png"
                alt="Lev868 Studios Image"
                href="https://studios.lev868.dynv6.net"
            ></BrandCard>

            <BrandCard
                title="Lev Transit"
                description="Our Roblox: Croydon custom companyt"
                src="/logo_circle.png"
                alt="Lev Transit Image"
                href="https://transit.lev868.dynv6.net"
            ></BrandCard>

            <BrandCard
                title="Project Transport"
                description="Our company, equally founded with SB Designs and TurquoiseTNT"
                src="/pt_logo_circle.png"
                alt="Project Transport Image"
                href="https://projecttransport.pages.dev"
            ></BrandCard>

            <h1 className="text-white font-semibold text-4xl max-w-lg mx-auto mt-15 flex justify-center">Partners</h1>

            <BrandCard
                title="SB Designs"
                description="Together, we work for greatness"
                src="/sb_logo.png"
                alt="SB Designs Image"
                href="https://sbdesigns.is-a.dev"
            ></BrandCard>

            <BrandCard
                title="TurquoiseTNT"
                description="Working closly with them behind the scenes"
                src="/tnt_logo.svg"
                alt="TurquoiseTNT Image"
                href="https://turquoisetnt.one"
            ></BrandCard>
        </main>
    );
}