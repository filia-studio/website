"use client";

import { type PointerEvent, useRef } from "react";
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
    image: "/images/filia-software-billboard.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Web apps",
    body: "Portals, SaaS flows, booking systems, internal tools, and operating software with a durable technical spine.",
    icon: Braces,
    image: "/images/filia-software-dashboard.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Mobile apps",
    body: "iOS, Android, and cross-platform products shaped around onboarding, reliability, and retention.",
    icon: Smartphone,
    image: "/images/filia-software-mobile.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Product design",
    body: "Discovery, product strategy, UX systems, prototypes, and interface direction before the expensive build decisions.",
    icon: PenTool,
    image: "/images/filia-software-lead.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Open source",
    body: "Reusable tools and public patterns that keep the studio craft visible, practical, and useful beyond one contract.",
    icon: Github,
    image: "/images/filia-software-dashboard.png",
    className: "md:col-span-2 md:row-span-1",
  },
];

const studioVisuals = [
  "/images/filia-software-billboard.png",
  "/images/filia-software-dashboard.png",
  "/images/filia-software-mobile.png",
  "/images/filia-software-lead.png",
];

const accordion = [
  {
    title: "Discovery",
    body: "We find the commercial pressure, user need, constraints, and decision risks before writing scope.",
    image: "/images/filia-software-lead.png",
  },
  {
    title: "Interface",
    body: "We shape flows, states, navigation, responsive systems, and interaction details that make products feel clear.",
    image: "/images/filia-software-mobile.png",
  },
  {
    title: "Engineering",
    body: "We build typed, tested, maintainable software with launch paths and support realities in view.",
    image: "/images/filia-software-dashboard.png",
  },
  {
    title: "Growth",
    body: "We improve performance, onboarding, SEO, analytics, and the product signals that guide the next release.",
    image: "/images/filia-software-billboard.png",
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

function AnimatedWords({
  text,
  className = "",
  wordClassName = "headline-word",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className={`${wordClassName} mr-[0.18em] inline-block will-change-transform`}>
          {word}
        </span>
      ))}
    </span>
  );
}

export function HomeExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const desireRef = useRef<HTMLElement | null>(null);
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
        gsap.from(".hero-reveal", {
          y: 36,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.09,
        });

        gsap.from(".hero-word", {
          yPercent: 112,
          rotateX: -48,
          opacity: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.035,
          delay: 0.16,
        });

        gsap.utils.toArray<HTMLElement>(".headline-wrap").forEach((wrap) => {
          gsap.fromTo(
            wrap.querySelectorAll(".headline-word"),
            { yPercent: 105, opacity: 0, rotateX: -35 },
            {
              yPercent: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.025,
              scrollTrigger: {
                trigger: wrap,
                start: "top 82%",
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".copy-reveal").forEach((copy) => {
          gsap.fromTo(
            copy,
            { y: 26, opacity: 0, filter: "blur(8px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: copy,
                start: "top 86%",
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".micro-text").forEach((text) => {
          gsap.fromTo(
            text,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.62,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 90%",
              },
            }
          );
        });

        gsap.to(".hero-sky", {
          scale: 1.08,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.fromTo(
          ".word-reveal",
          { opacity: 0.16, y: 16 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".word-reveal-wrap",
              start: "top 78%",
              end: "bottom 38%",
              scrub: true,
            },
          }
        );

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

        gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 72, opacity: 0.28, rotate: index % 2 === 0 ? -1.8 : 1.8 },
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

        const tiltCards = gsap.utils.toArray<HTMLElement>(".tilt-card");
        const cleanups = tiltCards.map((card) => {
          const image = card.querySelector<HTMLElement>(".tilt-media");

          const onMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
              rotateX: y * -5,
              rotateY: x * 6,
              y: -6,
              duration: 0.45,
              ease: "power3.out",
              transformPerspective: 900,
            });

            if (image) {
              gsap.to(image, {
                x: x * 14,
                y: y * 14,
                scale: 1.08,
                duration: 0.55,
                ease: "power3.out",
              });
            }
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              y: 0,
              duration: 0.65,
              ease: "elastic.out(1, 0.55)",
            });

            if (image) {
              gsap.to(image, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.65,
                ease: "elastic.out(1, 0.55)",
              });
            }
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);

          return () => {
            card.removeEventListener("mousemove", onMove);
            card.removeEventListener("mouseleave", onLeave);
          };
        });

        media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
          if (!desireRef.current || !pinnedRef.current) return;

          ScrollTrigger.create({
            trigger: desireRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: pinnedRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        });

        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
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
      <section className="hero-section relative min-h-dvh overflow-hidden bg-[#0F1720] text-white">
        <div
          className="hero-sky absolute -inset-8 bg-cover bg-center opacity-74 saturate-110 will-change-transform"
          style={{ backgroundImage: "url(/images/filia-sky-cloud-hero.png)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(78,122,151,0.2),transparent_28%),linear-gradient(90deg,rgba(15,23,32,0.94),rgba(15,23,32,0.74)_45%,rgba(15,23,32,0.36))]" />
        <div className="hero-spotlight pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" />

        <div className="relative mx-auto flex min-h-dvh max-w-370 flex-col justify-between px-4 pb-8 pt-28 md:px-8 md:pb-10 md:pt-36 lg:pt-40">
              <div className="grid gap-8 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <h1 className="hero-reveal max-w-6xl text-[clamp(2.65rem,13vw,6.9rem)] font-semibold leading-[0.92] tracking-normal md:text-[clamp(3.2rem,6.4vw,6.9rem)]">
                    <span className="block overflow-hidden">
                      <AnimatedWords text="Digital systems for ambitious companies." wordClassName="hero-word" />
                    </span>
                  </h1>
                </div>

                <div className="hero-reveal max-w-md justify-self-start lg:justify-self-end">
                  <p className="mb-6 text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl">
                    Websites, mobile apps, web platforms, and internal products built with taste and technical depth.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#services"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#4E7A97] px-6 text-sm font-semibold text-white transition hover:bg-[#F7F5F0] hover:text-[#0F1720]"
                    >
                      View services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#F7F5F0] px-6 text-sm font-semibold text-[#0F1720] transition hover:bg-[#DCE6EE]"
                    >
                      Start a project
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-reveal grid gap-4 border-t border-white/12 pt-5 text-sm text-white/62 grid-cols-2 md:grid-cols-4">
                <span className="text-center">+ Define</span>
                <span className="text-center">+ Design</span>
                <span className="text-center">+ Development</span>
                <span className="text-center">+ Deployment</span>
              </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-3 py-9">
        <div className="marquee-track">
          <div className="marquee-content text-lg font-semibold text-[#293241]">
            {[...capabilityMarks, ...capabilityMarks].map((mark, index) => (
              <span key={`${mark}-${index}`} className="mx-10 inline-flex items-center gap-4">
                <Sparkles className="h-5 w-5 text-[#4E7A97]" />
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="bg-[#F7F5F0] px-4 py-24 md:px-8 md:py-44">
        <div className="mx-auto max-w-370">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="headline-wrap max-w-6xl overflow-hidden text-[clamp(2.35rem,11vw,6.5rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,6vw,6.5rem)]">
              <AnimatedWords text="We build software that makes brands" />{" "}
              <span
                className="inline-block h-[0.58em] w-[1.2em] rounded-2xl bg-cover bg-center align-middle"
                style={{ backgroundImage: "url(/images/filia-software-dashboard.png)" }}
              />{" "}
              <AnimatedWords text="impossible to ignore." />
            </h2>
            <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-full border border-[#293241]/20 px-6 text-sm font-semibold text-[#293241] transition hover:border-[#4E7A97] hover:text-[#4E7A97]">
              About the studio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {studioVisuals.map((src, index) => (
              <div key={src} className="motion-image tilt-card group overflow-hidden rounded-3xl bg-[#0F1720] will-change-transform">
                <div
                  className="tilt-media aspect-4/5 bg-cover bg-center opacity-95 saturate-90 transition duration-700 group-hover:saturate-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(78,122,151,${index === 0 ? "0.28" : "0.08"}), rgba(15,23,32,0.12)), url(${src})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#0F1720] px-4 py-24 text-white md:px-8 md:py-44">
        <div className="mx-auto max-w-370">
          <div className="mb-14 max-w-5xl">
            <h2 className="headline-wrap overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.5vw,6rem)]">
              <AnimatedWords text="Our services are built around outcomes." />
            </h2>
          </div>

          <div className="grid-flow-dense grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[15.5rem] md:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className={`tilt-card group relative min-h-80 overflow-hidden rounded-4xl bg-[#293241] p-7 will-change-transform md:min-h-0 ${service.className}`}>
                <div
                  className="motion-image tilt-media absolute inset-0 bg-cover bg-center opacity-42 saturate-90 contrast-110 transition duration-700 group-hover:opacity-62 group-hover:saturate-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1720] via-[#0F1720]/62 to-transparent" />
                <div className="relative flex h-full flex-col justify-between">
                  <service.icon className="h-7 w-7 text-[#4E7A97]" />
                  <div>
                    <h3 className="micro-text mb-3 text-3xl font-semibold">{service.title}</h3>
                    <p className="micro-text max-w-xl leading-7 text-white/72">{service.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1720] px-4 pb-24 text-white md:px-8 md:pb-44">
        <div className="mx-auto max-w-370">
          <div className="mb-14 max-w-5xl">
            <h2 className="headline-wrap overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.5vw,6rem)]">
              <AnimatedWords text="Our workflow keeps the business and engineering in the same room." />
            </h2>
          </div>
          <div className="flex h-auto flex-col overflow-hidden rounded-4xl border border-white/12 md:h-168 md:flex-row">
            {accordion.map((item) => (
              <article key={item.title} className="group relative min-h-96 flex-1 overflow-hidden border-b border-white/12 transition-[flex] duration-700 ease-out hover:flex-[2.2] md:min-h-0 md:border-b-0 md:border-r">
                <div
                  className="motion-image absolute inset-0 bg-cover bg-center saturate-90 transition duration-700 group-hover:scale-105 group-hover:saturate-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1720] via-[#0F1720]/58 to-[#0F1720]/8" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="micro-text mb-3 text-2xl font-semibold md:text-3xl">{item.title}</h3>
                  <p className="max-w-md leading-7 text-white/72 opacity-100 transition duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" ref={desireRef} className="relative bg-[#F7F5F0] px-4 py-24 md:px-8 md:py-44">
        <div className="mx-auto grid max-w-370 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div ref={pinnedRef} className="h-fit lg:pt-8">
            <h2 className="headline-wrap max-w-3xl overflow-hidden text-[clamp(2.35rem,10.5vw,6rem)] font-semibold leading-[0.96] tracking-normal md:text-[clamp(3rem,5.5vw,6rem)]">
              <AnimatedWords text="Strong launches come from visible decisions." />
            </h2>
            <p className="word-reveal-wrap mt-6 max-w-xl text-lg leading-8 text-[#293241]/72">
              {"Our process keeps the commercial goal, product shape, and engineering reality in the same room."
                .split(" ")
                .map((word, index) => (
                  <span key={`${word}-${index}`} className="word-reveal mr-[0.28em] inline-block will-change-transform">
                    {word}
                  </span>
                ))}
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item) => (
              <article key={item.title} className="stack-card rounded-4xl border border-[#DCE6EE] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,32,0.08)] will-change-transform">
                <Check className="mb-14 h-6 w-6 text-[#4E7A97]" />
                <h3 className="micro-text mb-4 text-3xl font-semibold md:text-4xl">{item.title}</h3>
                <p className="copy-reveal max-w-2xl text-lg leading-8 text-[#293241]/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#293241] px-4 py-24 md:px-8 md:py-44">
        <div className="mx-auto max-w-370 rounded-4xl bg-[#0F1720] p-8 text-white md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <h2 className="headline-wrap max-w-5xl overflow-hidden text-[clamp(2.5rem,11vw,6.6rem)] font-semibold leading-[0.92] tracking-normal md:text-[clamp(3.2rem,6vw,6.6rem)]">
              <AnimatedWords text="Ready for a website that feels alive?" />
            </h2>
            <div>
              <p className="copy-reveal mb-8 text-xl leading-8 text-white/72">
                Bring the business problem. We will shape the product, design the system, and build the release.
              </p>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[#4E7A97] px-7 text-sm font-semibold text-white transition hover:bg-[#F7F5F0] hover:text-[#0F1720]">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
