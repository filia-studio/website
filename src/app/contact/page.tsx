import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ChevronDown,
    Github,
    Mail,
    MapPin,
    Phone,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

const contactCards = [
    {
        label: "Email",
        value: "hello@withfillia.com",
        href: "mailto:hello@withfillia.com",
        icon: Mail,
    },
    {
        label: "Phone",
        value: "+234 903 512 2388",
        href: "tel:+2349035122388",
        icon: Phone,
    },
    {
        label: "Studio",
        value: "5 Balogun Close, Addo, Ajah, Lagos",
        href: "https://www.google.com/maps/search/?api=1&query=5%20Balogun%20Close%20Addo%20Ajah%20Lagos",
        icon: MapPin,
    },
    {
        label: "GitHub",
        value: "github.com/filia-studio",
        href: "https://github.com/filia-studio",
        icon: Github,
    },
];

const questions = [
    {
        question: "What should I send first?",
        answer:
            "Send the rough version: business goal, audience, current bottleneck, timeline, useful links, and decisions already made.",
    },
    {
        question: "Can Filia shape the scope with us?",
        answer:
            "Yes. Discovery, product strategy, interface direction, and architecture planning are often the best first engagement.",
    },
    {
        question: "Do you support products after launch?",
        answer:
            "Yes. We can support maintenance, performance work, security updates, documentation, and product iteration.",
    },
];

export default function ContactPage() {
    return (
        <div className="overflow-x-hidden bg-white text-[#0d0d0d]">
            <section className="relative overflow-hidden bg-[#090909] px-4 text-white md:px-8">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-42 grayscale contrast-125"
                    style={{ backgroundImage: "url(https://picsum.photos/seed/filia-contact-red/2200/1300)" }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(229,50,56,0.48),transparent_24%),linear-gradient(90deg,rgba(5,5,5,0.98),rgba(5,5,5,0.78)_58%,rgba(5,5,5,0.48))]" />
                <div className="relative mx-auto max-w-[1480px] pb-16 pt-32 md:pb-24 md:pt-36 lg:pt-40">
                    <div className="max-w-6xl">
                        <p className="mb-6 max-w-md text-sm font-medium text-white/70">
                            Start with the useful details. We will help shape the rest.
                        </p>
                        <h1 className="max-w-6xl text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.92] tracking-normal">
                            Tell us what needs to exist.
                        </h1>
                        <p className="mt-7 max-w-2xl text-xl leading-8 text-white/72">
                            Bring the product idea, workflow problem, new website brief, or software system that needs new energy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 py-24 md:px-8 md:py-32">
                <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                    <Card className="rounded-[2rem] border-black/10 bg-[#f6f3ef] p-6 shadow-none md:p-8 lg:p-10">
                        <form className="space-y-6">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="fullname">Full name</Label>
                                    <Input id="fullname" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Work email</Label>
                                    <Input id="email" type="email" placeholder="you@company.com" />
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="service">Build type</Label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            className="flex h-12 w-full appearance-none rounded-full border border-black/12 bg-white px-4 py-2 text-sm text-[#0d0d0d] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53238] focus-visible:ring-offset-2"
                                        >
                                            <option>Website</option>
                                            <option>Web application</option>
                                            <option>Mobile application</option>
                                            <option>In-house product</option>
                                            <option>Open source collaboration</option>
                                            <option>Maintenance partnership</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-4 top-4 h-4 w-4 opacity-60" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timeline">Timeline</Label>
                                    <Input id="timeline" placeholder="Now, this quarter, or exploring" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">What should we understand first?</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about the users, business goal, bottleneck, deadline, or decision you need help making."
                                    className="min-h-44 resize-none"
                                />
                            </div>

                            <Button className="h-12 rounded-full bg-[#e53238] px-7 hover:bg-[#0d0d0d]">
                                Start a project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Card>

                    <div className="space-y-4">
                        <div className="rounded-[2rem] bg-[#090909] p-8 text-white">
                            <h2 className="text-4xl font-semibold leading-tight">
                                Rough is welcome.
                            </h2>
                            <p className="mt-5 text-lg leading-8 text-white/70">
                                Useful software starts with constraints, not polish. The first conversation is for finding shape.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {contactCards.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-5 transition hover:border-[#e53238] hover:bg-[#fff5f5]"
                                >
                                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-[#e53238]" strokeWidth={1.8} />
                                    <span>
                                        <span className="block text-sm font-medium text-black/52">
                                            {item.label}
                                        </span>
                                        <span className="mt-1 block font-semibold text-[#0d0d0d]">{item.value}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#090909] px-4 py-24 text-white md:px-8 md:py-32">
                <div className="mx-auto max-w-4xl">
                    <div className="space-y-4">
                        {questions.map((item) => (
                            <details
                                key={item.question}
                                className="group rounded-3xl border border-white/12 bg-white/6 [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-5 p-6 font-semibold transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53238]">
                                    <span>{item.question}</span>
                                    <Plus className="h-4 w-4 shrink-0 transition group-open:rotate-45" />
                                </summary>
                                <div className="px-6 pb-6 leading-7 text-white/68">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-10 rounded-[2rem] bg-[#e53238] p-8 md:p-10">
                        <h2 className="text-4xl font-semibold">Prefer direct email?</h2>
                        <p className="mt-4 max-w-2xl leading-7 text-white/82">
                            Send context to hello@withfillia.com and include links, timelines, or decisions already made.
                        </p>
                        <Link
                            href="mailto:hello@withfillia.com"
                            className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                        >
                            Start a project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
