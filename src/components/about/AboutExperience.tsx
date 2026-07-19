"use client";

import { type PointerEvent, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Braces, Github, Layers3, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Taste with proof",
    body: "We care about how the product feels, then back it with architecture, QA, analytics, and launch discipline.",
    image: "/images/filia-software-dashboard.png",
    className: "md:col-span-2 md:row-span-2",
    icon: Layers3,
  },
  {
    title: "Senior build habits",
    body: "Typed code, clear ownership, maintainable patterns, and delivery rhythms that do not depend on heroics.",
    image: "/images/filia-software-lead.png",
    className: "md:col-span-2 md:row-span-1",
    icon: ShieldCheck,
  },
  {
    title: "Useful software first",
    body: "Every feature earns its place by reducing friction, clarifying a workflow, or making revenue easier to reach.",
    image: "/images/filia-software-mobile.png",
    className: "md:col-span-1 md:row-span-1",
    icon: Braces,
  },
  {
    title: "Compounding assets",
    body: "Client systems, in-house products, and open source work all sharpen the studio.",
    image: "/images/filia-software-billboard.png",
    className: "md:col-span-1 md:row-span-1",
    icon: Github,
  },
];

const story = [
  {
    title: "We clarify the business pressure",
    body: "Before interface polish or implementation detail, we locate the decision that matters: revenue, operations, trust, speed, or retention.",
  },
  {
    title: "We shape the digital system",
    body: "The output might be a marketing site, SaaS workflow, mobile app, internal tool, automation layer, or product foundation.",
  },
  {
    title: "We build for the team after launch",
    body: "Code structure, documentation, deployment, analytics, and support are part of the product, not chores saved for later.",
  },
];

const capabilities = [
  "Websites",
  "Web apps",
  "Mobile apps",
  "Internal tools",
  "Product design",
  "Cloud systems",
  "Open source",
  "Support",
];

const imageStrip = [
  "/images/filia-software-billboard.png",
  "/images/filia-software-dashboard.png",
  "/images/filia-software-mobile.png",
  "/images/filia-software-lead.png",
];

const operatingProof = [
  {
    title: "Client work",
    body: "Websites, platforms, and product surfaces for teams that need stronger digital execution.",
  },
  {
    title: "In-house products",
    body: "Software we own, test, package, and sell to companies with real operational needs.",
  },
  {
    title: "Open source",
    body: "Reusable tools and public patterns that keep our engineering habits visible.",
  },
  {
    title: "Support",
    body: "Maintenance, iteration, performance work, and product improvement after launch.",
  },
];

const focusAreas = [
  {
    title: "Brand websites",
    body: "Fast, clear, image-led sites that make the offer easier to understand and trust.",
    image: "/images/filia-software-billboard.png",
  },
  {
    title: "Application platforms",
    body: "SaaS flows, portals, dashboards, booking systems, and internal tools with maintainable architecture.",
    image: "/images/filia-software-dashboard.png",
  },
  {
    title: "Mobile products",
    body: "App experiences shaped around onboarding, reliability, daily use, and long-term product iteration.",
    image: "/images/filia-software-mobile.png",
  },
  {
    title: "Studio IP",
    body: "In-house products and open source tools that sharpen our delivery model and create reusable value.",
    image: "/images/filia-software-lead.png",
  },
];

function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="about-word mr-[0.18em] inline-block will-change-transform">
          {word}
        </span>
      ))}
    </span>
  );
}

function HeroSplitText({ text }: { text: string }) {
  return (
    <span>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="about-hero-word mr-[0.18em] inline-block will-change-transform"
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export function AboutExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
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
        gsap.from(".about-hero-word", {
          yPercent: 110,
          opacity: 0,
          rotateX: -44,
          duration: 1,
          ease: "power4.out",
          stagger: 0.035,
          delay: 0.12,
        });

        gsap.from(".about-reveal", {
          y: 34,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        });

        gsap.to(".about-sky", {
          scale: 1.08,
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".about-heading").forEach((heading) => {
          gsap.fromTo(
            heading.querySelectorAll(".about-word"),
            { yPercent: 105, opacity: 0, rotateX: -34 },
            {
              yPercent: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.82,
              ease: "power3.out",
              stagger: 0.026,
              scrollTrigger: {
                trigger: heading,
                start: "top 82%",
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".about-card").forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 72, opacity: 0.24, rotate: index % 2 === 0 ? -1.4 : 1.4 },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 48%",
                scrub: true,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".about-scrub-word").forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 0.15, y: 18 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: word,
                start: "top 90%",
                end: "top 56%",
                scrub: true,
              },
            }
          );
        });

        media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
          if (!storyRef.current || !pinnedRef.current) return;

          ScrollTrigger.create({
            trigger: storyRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: pinnedRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        });
      });

      return () => media.revert();
    },
    { scope: rootRef }
  );

  return (
    <main
      ref={rootRef}
      onPointerMove={handlePointerMove}
      className="w-full max-w-full overflow-x-hidden bg-[#F7F5F0] text-[#0F1720] [--pointer-x:50vw] [--pointer-y:50vh]"
    >
      <section className="about-hero relative overflow-hidden bg-[#0F1720] px-4 text-white md:px-8">
        <div
          className="about-sky absolute -inset-8 bg-cover bg-center opacity-72 saturate-110 will-change-transform"
          style={{ backgroundImage: "url(/images/filia-sky-cloud-hero.png)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(78,122,151,0.22),transparent_28%),linear-gradient(90deg,rgba(15,23,32,0.94),rgba(15,23,32,0.74)_58%,rgba(15,23,32,0.38))]" />
        <div className="hero-spotlight pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" />

        <div className="relative mx-auto max-w-370 pb-14 pt-28 md:pb-24 md:pt-36 lg:pt-40">
          <div className="max-w-6xl">
            <h1 className="max-w-6xl overflow-hidden text-[clamp(2.75rem,13vw,6.9rem)] font-semibold leading-[0.92] tracking-normal md:text-[clamp(3.2rem,6.4vw,6.9rem)]">
              <HeroSplitText text="Filia Studio builds software with staying power." />
            </h1>
            <p className="about-reveal mt-6 max-w-2xl text-lg leading-7 text-white/72 md:mt-7 md:text-xl md:leading-8">
              We design, engineer, launch, and support websites, applications, products, and open source tools.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-3 py-9">
        <div className="marquee-track">
          <div className="marquee-content text-lg font-semibold text-[#293241]">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span key={`${item}-${index}`} className="mx-10 inline-flex items-center gap-4">
                <Rocket className="h-5 w-5 text-[#4E7A97]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-370">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.34fr] lg:items-end">
            <h2 className="about-heading max-w-6xl overflow-hidden text-[clamp(2.35rem,10.5vw,6.4rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.8vw,6.4rem)]">
              <SplitText text="A software studio for businesses that need the build to feel as sharp as the idea." />
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-12 w-fit items-center justify-center rounded-full border border-[#293241]/20 px-6 text-sm font-semibold text-[#293241] transition hover:border-[#4E7A97] hover:text-[#4E7A97]"
            >
              Work with us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {imageStrip.map((src, index) => (
              <div
                key={src}
                className={`about-card group overflow-hidden rounded-4xl bg-[#0F1720] ${index === 1 ? "lg:translate-y-10" : ""} ${index === 3 ? "lg:-translate-y-8" : ""}`}
              >
                <div
                  className="aspect-[4/5] bg-cover bg-center opacity-94 saturate-90 transition duration-700 group-hover:scale-105 group-hover:saturate-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(78,122,151,${index === 0 ? "0.18" : "0.08"}), rgba(15,23,32,0.08)), url(${src})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-4 py-24 md:px-8 md:py-44">
        <div className="mx-auto max-w-370">
          <h2 className="about-heading max-w-6xl overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.6vw,6rem)]">
            <SplitText text="We are small by design, broad by capability." />
          </h2>

          <div className="mt-14 grid-flow-dense grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-4">
            {principles.map((item) => (
              <article
                key={item.title}
                className={`about-card group relative min-h-80 overflow-hidden rounded-4xl bg-[#0F1720] p-7 text-white shadow-[0_24px_80px_rgba(15,23,32,0.12)] md:min-h-0 ${item.className}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-34 saturate-90 contrast-110 transition duration-700 group-hover:scale-105 group-hover:opacity-56 group-hover:saturate-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1720] via-[#0F1720]/64 to-[#0F1720]/8" />
                <div className="relative flex h-full flex-col justify-between">
                  <item.icon className="h-7 w-7 text-[#4E7A97]" />
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold md:text-3xl">{item.title}</h3>
                    <p className="max-w-xl leading-7 text-white/74">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-4 pb-24 md:px-8 md:pb-44">
        <div className="mx-auto max-w-370 border-t border-[#293241]/14 pt-10">
          <div className="grid gap-6 md:grid-cols-4">
            {operatingProof.map((item) => (
              <article key={item.title} className="about-card border-t border-[#293241]/14 pt-7">
                <Sparkles className="mb-8 h-5 w-5 text-[#4E7A97]" />
                <h3 className="mb-3 text-2xl font-semibold leading-none md:text-3xl">{item.title}</h3>
                <p className="text-sm leading-6 text-[#293241]/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1720] px-4 py-24 text-white md:px-8 md:py-44">
        <div className="mx-auto max-w-370">
          <div className="mb-14 max-w-5xl">
            <h2 className="about-heading overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.5vw,6rem)]">
              <SplitText text="Different work, one operating standard." />
            </h2>
          </div>
          <div className="flex h-auto flex-col overflow-hidden rounded-4xl border border-white/12 md:h-168 md:flex-row">
            {focusAreas.map((item) => (
              <article key={item.title} className="group relative min-h-96 flex-1 overflow-hidden border-b border-white/12 transition-[flex] duration-700 ease-out hover:flex-[2.25] md:min-h-0 md:border-b-0 md:border-r">
                <div
                  className="absolute inset-0 bg-cover bg-center saturate-90 transition duration-700 group-hover:scale-105 group-hover:saturate-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1720] via-[#0F1720]/62 to-[#0F1720]/10" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="mb-3 text-2xl font-semibold md:text-3xl">{item.title}</h3>
                  <p className="max-w-md leading-7 text-white/72 opacity-100 transition duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={storyRef} className="relative bg-[#0F1720] px-4 py-24 text-white md:px-8 md:py-44">
        <div className="mx-auto grid max-w-370 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div ref={pinnedRef} className="h-fit lg:pt-8">
            <h2 className="about-heading max-w-4xl overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.5vw,6rem)]">
              <SplitText text="The studio is built around the work after launch." />
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
              {"A good launch is not a handoff. It is the beginning of evidence: users, performance, support requests, operational pressure, and the next better version."
                .split(" ")
                .map((word, index) => (
                  <span key={`${word}-${index}`} className="about-scrub-word mr-[0.28em] inline-block will-change-transform">
                    {word}
                  </span>
                ))}
            </p>
          </div>

          <div className="space-y-6">
            {story.map((item) => (
              <article key={item.title} className="about-card rounded-4xl border border-white/12 bg-white/8 p-8 backdrop-blur-xl md:p-10">
                <h3 className="mb-5 text-3xl font-semibold leading-none md:text-4xl">{item.title}</h3>
                <p className="max-w-2xl text-lg leading-8 text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#293241] px-4 py-24 md:px-8 md:py-44">
        <div className="mx-auto max-w-370 overflow-hidden rounded-4xl bg-[#F7F5F0] p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <h2 className="about-heading max-w-5xl overflow-hidden text-[clamp(2.5rem,11vw,6.6rem)] font-semibold leading-[0.92] tracking-normal md:text-[clamp(3.2rem,6vw,6.6rem)]">
              <SplitText text="Bring the problem. We will shape the system." />
            </h2>
            <div>
              <p className="mb-8 text-xl leading-8 text-[#293241]/76">
                The first conversation is for finding the useful shape: scope, risks, path, and what should happen next.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#4E7A97] px-7 text-sm font-semibold text-white transition hover:bg-[#0F1720]"
              >
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
