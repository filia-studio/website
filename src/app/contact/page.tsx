import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/ContactExperience";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Start a project with Filia Studio for a website, mobile app, web platform, in-house software product, or long-term software partnership.",
    openGraph: {
        title: "Start a Project With Filia Studio",
        description:
            "Discuss a website, mobile app, web platform, in-house software product, or long-term software partnership.",
        url: "https://withfillia.com/contact",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Start a Project With Filia Studio",
        description:
            "Discuss a website, mobile app, web platform, in-house software product, or long-term software partnership.",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactExperience />;
}
