import type { ReactNode } from "react";
import Image from "next/image";

type CardProps = {
    title: string;
    details: ReactNode[];
};

type BrandCardProps = {
    title: string;
    description: string;
    src: string;
    alt: string;
    href: string;
};

type HelpCardProps = {
    title: string;
    details: ReactNode[];
    href: string;
};

export default function Card({ title, details }: CardProps) {
    return (
        <section className="bg-gray-900 group hover:bg-sky-950 hover:p-10 hover:max-w-[1054px] rounded-2xl max-w-5xl mx-auto p-8 shadow-lg mt-5 border-2 ease-in-out border-sky-950 hover:border-sky-900 duration-100">
            <h2 className="text-white font-semibold text-2xl group-hover:text-3xl mb-3 ease-in-out duration-100">{title}</h2>
            <div className="text-gray-400 space-y-1 group-hover:text-lg ease-in-out duration-100">
                {details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
        </section>
    );
}

export function BrandCard({ title, description, src, alt, href }: BrandCardProps) {
    return (
        <a href={href} target="_blank" className="flex justify-between bg-gray-900 group hover:bg-sky-950 hover:p-10 hover:max-w-[542px] rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-5 border-2 ease-in-out border-sky-950 hover:border-sky-900 duration-100">
            <div>
                <h2 className="text-white font-semibold text-2xl group-hover:text-3xl mb-3 ease-in-out duration-100">{title}</h2>
                <p className="text-gray-400 space-y-1 group-hover:text-lg ease-in-out duration-100">{description}</p>
            </div>
            <Image src={src} alt={alt} width={100} height={100} />
        </a>
    );
}

export function HelpCard({ title, details, href }: HelpCardProps) {
    return (
        <section className="bg-gray-900 group hover:bg-sky-950 hover:p-10 hover:max-w-[1054px] rounded-2xl max-w-5xl mx-auto p-8 shadow-lg mt-5 border-2 ease-in-out border-sky-950 hover:border-sky-900 duration-100">
            <a href={href} target="_blank">
                <h2 className="text-white font-semibold text-2xl group-hover:text-3xl mb-3 ease-in-out duration-100">{title}</h2>
                <div className="text-gray-400 space-y-1 group-hover:text-lg ease-in-out duration-100">
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
            </a>
        </section>
    );
}