"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Check,
  Github,
  Globe2,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const capabilityMarks = ["Strategy", "UX systems", "Frontend", "Backend", "Mobile", "Cloud", "Open source", "Support"];

const services = [
  {
    title: "Websites",
    body: "Sharp marketing sites, content systems, and landing pages that make the offer easier to understand and buy.",
    icon: Globe2,
    image: "https://picsum.photos/seed/filia-red-websites/1200/900",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Web apps",
    body: "Portals, SaaS flows, booking systems, internal tools, and operating software with a durable technical spine.",
    icon: Braces,
    image: "https://picsum.photos/seed/filia-web-apps/1200/900",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Mobile apps",
    body: "iOS, Android, and cross-platform products shaped around onboarding, reliability, and retention.",
    icon: Smartphone,
    image: "https://picsum.photos/seed/filia-mobile-red/900/900",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Product design",
    body: "Discovery, product strategy, UX systems, prototypes, and interface direction before the expensive build decisions.",
    icon: PenTool,
    image: "https://picsum.photos/seed/filia-product-design/900/900",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Open source",
    body: "Reusable tools and public patterns that keep the studio craft visible, practical, and useful beyond one contract.",
    icon: Github,
    image: "https://picsum.photos/seed/filia-open-source-red/1200/900",
    className: "md:col-span-2 md:row-span-1",
  },
];

const portraits = [
  "https://picsum.photos/seed/filia-motion-portrait-1/720/920",
  "https://picsum.photos/seed/filia-motion-portrait-2/720/920",
  "https://picsum.photos/seed/filia-motion-portrait-3/720/920",
  "https://picsum.photos/seed/filia-motion-portrait-4/720/920",
];

const accordion = [
  {
    title: "Discovery",
    body: "We find the commercial pressure, user need, constraints, and decision risks before writing scope.",
    image: "https://picsum.photos/seed/filia-discovery-workshop/1200/1600",
  },
  {
    title: "Interface",
    body: "We shape flows, states, navigation, responsive systems, and interaction details that make products feel clear.",
    image: "https://picsum.photos/seed/filia-interface-studio/1200/1600",
  },
  {
    title: "Engineering",
    body: "We build typed, tested, maintainable software with launch paths and support realities in view.",
    image: "https://picsum.photos/seed/filia-engineering-team/1200/1600",
  },
  {
    title: "Growth",
    body: "We improve performance, onboarding, SEO, analytics, and the product signals that guide the next release.",
    image: "https://picsum.photos/seed/filia-growth-systems/1200/1600",
  },
];

const process = [
  {
    title: "Frame",
    body: "Turn the messy brief into a useful product direction with real constraints attached.",
  },
  {
    title: "Prototype",
    body: "Test the riskiest interface, data, and architecture decisions while they are still cheap to change.",
  },
  {
    title: "Build",
    body: "Ship the durable version with senior engineering habits and visible progress.",
  },
  {
    title: "Iterate",
    body: "Launch, observe, harden, and keep improving the product after real users arrive.",
  },
];

export function HomeExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const desireRef = useRef<HTMLElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          y: 36,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.09,
        });

        gsap.utils.toArray<HTMLElement>(".motion-image").forEach((image) => {
          gsap.fromTo(
            image,
            { scale: 0.84, opacity: 0.28 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: image,
                start: "top 88%",
                end: "bottom 20%",
                scrub: true,
              },
            }
          );
        });

        if (desireRef.current && pinnedRef.current) {
          ScrollTrigger.create({
            trigger: desireRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: pinnedRef.current,
            pinSpacing: false,
          });
        }
      });

      return () => media.revert();
    },
    { scope: rootRef }
  );

  return (
    <main ref={rootRef} className="w-full max-w-full overflow-x-hidden bg-white text-[#0d0d0d]">
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#090909] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55 grayscale contrast-125"
          style={{ backgroundImage: "url(https://picsum.photos/seed/filia-stodio-hero/2200/1300)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(185,31,37,0.38),transparent_24%),linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.78)_45%,rgba(5,5,5,0.48))]" />

        <div className="relative mx-auto flex min-h-[100dvh] max-w-[1480px] flex-col justify-between px-4 pb-10 pt-32 md:px-8 md:pt-36 lg:pt-40">
              <div className="grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <p className="hero-reveal mb-6 max-w-md text-sm font-medium text-white/72">
                    Creative software studio for brands, operators, and product teams that need the build to feel as sharp as the idea.
                  </p>
                  <h1 className="hero-reveal max-w-6xl text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.92] tracking-normal">
                    Digital systems for ambitious companies.
                  </h1>
                </div>

                <div className="hero-reveal max-w-md justify-self-start lg:justify-self-end">
                  <p className="mb-6 text-2xl font-medium leading-tight text-white md:text-3xl">
                    Websites, mobile apps, web platforms, and internal products built with taste and technical depth.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#services"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#e53238] px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      View services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/82"
                    >
                      Start a project
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-reveal grid gap-4 border-t border-white/12 pt-5 text-sm text-white/62 md:grid-cols-3">
                <span>+ Define</span>
                <span>+ Design</span>
                <span>+ Development</span>
              </div>
        </div>
      </section>

      <section className="bg-white px-3 py-9">
        <div className="marquee-track">
          <div className="marquee-content text-lg font-semibold text-black/82">
            {[...capabilityMarks, ...capabilityMarks].map((mark, index) => (
              <span key={`${mark}-${index}`} className="mx-10 inline-flex items-center gap-4">
                <Sparkles className="h-5 w-5 text-[#e53238]" />
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="bg-white px-4 py-32 md:px-8 md:py-44">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-6xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.96] tracking-normal">
              We build software that makes brands{" "}
              <span
                className="inline-block h-[0.58em] w-[1.2em] rounded-2xl bg-cover bg-center align-middle"
                style={{ backgroundImage: "url(https://picsum.photos/seed/filia-inline-red/600/320)" }}
              />{" "}
              impossible to ignore.
            </h2>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 px-6 text-sm font-semibold text-black transition hover:border-[#e53238] hover:text-[#e53238]">
              About the studio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {portraits.map((src, index) => (
              <div key={src} className="motion-image group overflow-hidden rounded-3xl bg-black">
                <div
                  className="aspect-[4/5] bg-cover bg-center opacity-90 grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(229,50,56,${index === 0 ? "0.38" : "0.08"}), rgba(0,0,0,0.08)), url(${src})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#080808] px-4 py-32 text-white md:px-8 md:py-44">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-14 max-w-5xl">
            <h2 className="text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.96] tracking-normal">
              Our services are built around outcomes.
            </h2>
          </div>

          <div className="grid-flow-dense grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[15.5rem] md:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className={`group relative overflow-hidden rounded-[2rem] bg-[#151515] p-7 ${service.className}`}>
                <div
                  className="motion-image absolute inset-0 bg-cover bg-center opacity-35 grayscale contrast-125 transition duration-700 group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/62 to-transparent" />
                <div className="relative flex h-full flex-col justify-between">
                  <service.icon className="h-7 w-7 text-[#e53238]" />
                  <div>
                    <h3 className="mb-3 text-3xl font-semibold">{service.title}</h3>
                    <p className="max-w-xl leading-7 text-white/72">{service.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080808] px-4 pb-32 text-white md:px-8 md:pb-44">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex h-[42rem] flex-col overflow-hidden rounded-[2rem] border border-white/12 md:flex-row">
            {accordion.map((item) => (
              <article key={item.title} className="group relative flex-1 overflow-hidden border-b border-white/12 transition-[flex] duration-700 ease-out hover:flex-[2.2] md:border-b-0 md:border-r">
                <div
                  className="motion-image absolute inset-0 bg-cover bg-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/58 to-black/8" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="mb-3 text-3xl font-semibold">{item.title}</h3>
                  <p className="max-w-md translate-y-4 leading-7 text-white/72 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" ref={desireRef} className="relative bg-white px-4 py-32 md:px-8 md:py-44">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div ref={pinnedRef} className="h-fit lg:pt-8">
            <h2 className="max-w-3xl text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.96] tracking-normal">
              Strong launches come from visible decisions.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/62">
              Our process keeps the commercial goal, product shape, and engineering reality in the same room.
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-black/10 bg-[#f6f3ef] p-8">
                <Check className="mb-14 h-6 w-6 text-[#e53238]" />
                <h3 className="mb-4 text-4xl font-semibold">{item.title}</h3>
                <p className="max-w-2xl text-lg leading-8 text-black/62">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b91f25] px-4 py-32 md:px-8 md:py-44">
        <div className="mx-auto max-w-[1480px] rounded-[2rem] bg-[#090909] p-8 text-white md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <h2 className="max-w-5xl text-[clamp(3.2rem,6vw,6.6rem)] font-semibold leading-[0.92] tracking-normal">
              Ready for a website that feels alive?
            </h2>
            <div>
              <p className="mb-8 text-xl leading-8 text-white/72">
                Bring the business problem. We will shape the product, design the system, and build the release.
              </p>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[#e53238] px-7 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
