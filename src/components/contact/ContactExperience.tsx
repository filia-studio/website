"use client";

import { type PointerEvent, useRef } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

gsap.registerPlugin(ScrollTrigger);

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

function HeroWords({ text }: { text: string }) {
    return (
        <>
            {text.split(" ").map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="contact-hero-word mr-[0.18em] inline-block will-change-transform"
                >
                    {word}
                </span>
            ))}
        </>
    );
}

export function ContactExperience() {
    const rootRef = useRef<HTMLDivElement | null>(null);

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (!rootRef.current) return;

        const rect = rootRef.current.getBoundingClientRect();
        rootRef.current.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        rootRef.current.style.setProperty("--pointer-y", `${event.clientY}px`);
    }

    useGSAP(
        () => {
            if (!rootRef.current) return;

            const media = gsap.matchMedia();

            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.from(".contact-hero-word", {
                    yPercent: 110,
                    opacity: 0,
                    rotateX: -42,
                    duration: 1,
                    ease: "power4.out",
                    stagger: 0.04,
                    delay: 0.12,
                });

                gsap.from(".contact-reveal", {
                    y: 32,
                    opacity: 0,
                    filter: "blur(8px)",
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.08,
                    delay: 0.2,
                });

                gsap.to(".contact-sky", {
                    scale: 1.08,
                    yPercent: 7,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".contact-hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.fromTo(
                    ".contact-form-shell",
                    { y: 80, opacity: 0.28, rotate: -1.2 },
                    {
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".contact-form-shell",
                            start: "top 86%",
                            end: "top 46%",
                            scrub: true,
                        },
                    }
                );

                gsap.from(".contact-field", {
                    y: 22,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.055,
                    scrollTrigger: {
                        trigger: ".contact-form-shell",
                        start: "top 74%",
                    },
                });

                gsap.utils.toArray<HTMLElement>(".contact-card-motion").forEach((card, index) => {
                    gsap.fromTo(
                        card,
                        { x: 46, opacity: 0, rotate: index % 2 === 0 ? 1.4 : -1.4 },
                        {
                            x: 0,
                            opacity: 1,
                            rotate: 0,
                            duration: 0.78,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 86%",
                            },
                        }
                    );
                });

                gsap.utils.toArray<HTMLElement>(".contact-faq-item").forEach((item, index) => {
                    gsap.fromTo(
                        item,
                        { y: 36, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.72,
                            ease: "power3.out",
                            delay: index * 0.04,
                            scrollTrigger: {
                                trigger: item,
                                start: "top 88%",
                            },
                        }
                    );
                });

                gsap.fromTo(
                    ".direct-email-card",
                    { scale: 0.94, opacity: 0.3, y: 50 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".direct-email-card",
                            start: "top 90%",
                            end: "top 56%",
                            scrub: true,
                        },
                    }
                );
            });

            return () => media.revert();
        },
        { scope: rootRef }
    );

    return (
        <div
            ref={rootRef}
            onPointerMove={handlePointerMove}
            className="overflow-x-hidden bg-[#F7F5F0] text-[#0F1720] [--pointer-x:50vw] [--pointer-y:50vh]"
        >
            <section className="contact-hero relative overflow-hidden bg-[#0F1720] px-4 text-white md:px-8">
                <div
                    className="contact-sky absolute -inset-8 bg-cover bg-center opacity-72 saturate-110 will-change-transform"
                    style={{ backgroundImage: "url(/images/filia-sky-cloud-hero.png)" }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(78,122,151,0.22),transparent_28%),linear-gradient(90deg,rgba(15,23,32,0.94),rgba(15,23,32,0.74)_58%,rgba(15,23,32,0.38))]" />
                <div className="hero-spotlight pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" />
                <div className="relative mx-auto max-w-370 pb-14 pt-28 md:pb-24 md:pt-36 lg:pt-40">
                    <div className="max-w-6xl">
                        <h1 className="max-w-6xl overflow-hidden text-[clamp(2.75rem,13vw,6.9rem)] font-semibold leading-[0.92] tracking-normal md:text-[clamp(3.2rem,6.4vw,6.9rem)]">
                            <HeroWords text="Tell us what needs to exist." />
                        </h1>
                        <p className="contact-reveal mt-6 max-w-2xl text-lg leading-7 text-white/72 md:mt-7 md:text-xl md:leading-8">
                            Bring the product idea, workflow problem, new website brief, or software system that needs new energy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F5F0] px-4 py-20 md:px-8 md:py-32">
                <div className="mx-auto grid max-w-370 gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                    <Card className="contact-form-shell rounded-4xl border-[#DCE6EE] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,32,0.08)] will-change-transform md:p-8 lg:p-10">
                        <form className="space-y-6">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="contact-field space-y-2">
                                    <Label htmlFor="fullname">Full name</Label>
                                    <Input id="fullname" placeholder="Your name" />
                                </div>
                                <div className="contact-field space-y-2">
                                    <Label htmlFor="email">Work email</Label>
                                    <Input id="email" type="email" placeholder="you@company.com" />
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="contact-field space-y-2">
                                    <Label htmlFor="service">Build type</Label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            className="flex h-12 w-full appearance-none rounded-full border border-[#DCE6EE] bg-white px-4 py-2 text-sm text-[#0F1720] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E7A97] focus-visible:ring-offset-2"
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
                                <div className="contact-field space-y-2">
                                    <Label htmlFor="timeline">Timeline</Label>
                                    <Input id="timeline" placeholder="Now, this quarter, or exploring" />
                                </div>
                            </div>

                            <div className="contact-field space-y-2">
                                <Label htmlFor="message">What should we understand first?</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about the users, business goal, bottleneck, deadline, or decision you need help making."
                                    className="min-h-44 resize-none"
                                />
                            </div>

                            <Button className="contact-field h-12 rounded-full bg-[#4E7A97] px-7 hover:bg-[#0F1720]">
                                Start a project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Card>

                    <div className="space-y-4">
                        <div className="contact-card-motion rounded-4xl bg-[#0F1720] p-6 text-white md:p-8">
                            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
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
                                    className="contact-card-motion group flex min-w-0 items-start gap-4 rounded-3xl border border-[#DCE6EE] bg-white p-5 transition hover:border-[#4E7A97] hover:bg-[#DCE6EE]"
                                >
                                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-[#4E7A97]" strokeWidth={1.8} />
                                    <span className="min-w-0">
                                        <span className="block text-sm font-medium text-[#293241]/60">
                                            {item.label}
                                        </span>
                                        <span className="mt-1 block break-words font-semibold text-[#0F1720]">{item.value}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0F1720] px-4 py-20 text-white md:px-8 md:py-32">
                <div className="mx-auto max-w-4xl">
                    <div className="space-y-4">
                        {questions.map((item) => (
                            <details
                                key={item.question}
                                className="contact-faq-item group rounded-3xl border border-white/12 bg-white/6 [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-5 p-6 font-semibold transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E7A97]">
                                    <span>{item.question}</span>
                                    <Plus className="h-4 w-4 shrink-0 transition group-open:rotate-45" />
                                </summary>
                                <div className="px-6 pb-6 leading-7 text-white/68">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="direct-email-card mt-10 rounded-4xl bg-[#4E7A97] p-6 will-change-transform md:p-10">
                        <h2 className="text-3xl font-semibold md:text-4xl">Prefer direct email?</h2>
                        <p className="mt-4 max-w-2xl leading-7 text-white/82">
                            Send context to hello@withfillia.com and include links, timelines, or decisions already made.
                        </p>
                        <Link
                            href="mailto:hello@withfillia.com"
                            className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#F7F5F0] px-7 text-sm font-semibold text-[#0F1720] transition hover:bg-[#0F1720] hover:text-white"
                        >
                            Start a project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
