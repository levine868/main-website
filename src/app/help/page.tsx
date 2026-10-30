import { Metadata } from "next";
import { HelpCard} from "../../../lib/card";

export const metadata: Metadata = {
    title: "Help",
};

export default function Help() {
    return (
        <main className="flex-1 px-6 py-16">
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-white text-4xl font-bold">Our Contact Details</h1>
                <p className="text-gray-400 mt-4">Feel free to contact us if you need help</p>
            </section>

            <HelpCard
                title="Email"
                href="mailto:enquires@lev868-studios.dynv6.net"
                details={[
                    <>Send an email to mailto:enquires@lev868-studios.dynv6.net</>,
                    <>We will reply as soon as we are avaliable to</>
                ]}
            ></HelpCard>

            <HelpCard
                title="Discord"
                href="https://discord.gg/juf34CqGXn"
                details={[
                    <>Join our discord server using the following link: https://discord.gg/juf34CqGXn</>,
                    <>You can join our vast yet growing community</>,
                    <>You will be able to find community and dedicated help here</>,
                    <>Bugs and suggestions are welcome here, with their own dedicated area</>
                ]}
            ></HelpCard>

            <HelpCard
                title="Status"
                href="https://status.lev868.dynv6.net"
                details={[
                    <>You can view the status of our services here: https://status.lev868.dynv6.net</>,
                    <>We try and fix any services promptly</>
                ]}
            ></HelpCard>

            <HelpCard
                title="Github"
                href="https://github.com/levine868"
                details={[
                    <>Visit our open-source program at https://github.com/levine868</>,
                    <>You can report bugs here and offer suggestions</>,
                ]}
            ></HelpCard>
        </main>
    );
}