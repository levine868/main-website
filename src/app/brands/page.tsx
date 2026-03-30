import Image from "next/image";
import Link from "next/link";

export default function Brands() {
    return (
        <main className="flex-1">
            <Link href="https://studios.lev868.com">
                <section className="bg-gray-900 rounded-2xl max-w-lg mx-auto p-8 shadow-lg mt-10 flex justify-between">
                    <div>
                        <h2 className="text-white font-semibold text-2xl mb-3">Lev868 Studios</h2>
                        <p className="text-gray-400 space-y-1">For game development</p>
                    </div>
                    <Image src="/logo_circle.png" alt="Lev868 Studios Image" width={100} height={100} />
                </section>
            </Link>
        </main>
    );
}