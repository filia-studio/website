import Link from "next/link";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";

const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
];

const contactLinks = [
    { label: "hello@withfillia.com", href: "mailto:hello@withfillia.com" },
    { label: "+234 903 512 2388", href: "tel:+2349035122388" },
    { label: "GitHub", href: "https://github.com/filia-studio" },
    { label: "Start a project", href: "/contact" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/filia-studio", icon: Github },
    { label: "Email", href: "mailto:hello@withfillia.com", icon: Mail },
    { label: "Phone", href: "tel:+2349035122388", icon: Phone },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#080808] px-4 py-16 text-white md:px-8 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-370">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_1.35fr]">
                    <div>
                        <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,5rem)] font-semibold leading-[0.95] tracking-normal">
                            Stay close to what Filia is building
                        </h2>

                        <form className="mt-10 flex max-w-2xl items-center gap-3 rounded-full border border-white/72 px-5 py-3">
                            <label htmlFor="footer-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Enter your email"
                                className="h-12 min-w-0 flex-1 bg-transparent text-lg font-medium text-white outline-none placeholder:text-white/72"
                            />
                            <button
                                type="submit"
                                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-black transition hover:bg-[#e53238] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53238] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                                aria-label="Subscribe to Filia Studio updates"
                            >
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </form>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="inline-flex h-9 items-center gap-2 rounded-full bg-white/12 px-4 text-white transition hover:bg-[#e53238]"
                                >
                                    <item.icon className="h-4 w-4" />
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2">
                        {[primaryLinks, contactLinks].map((group, index) => (
                            <nav
                                key={index}
                                className="border-l border-white/12 pl-7"
                                aria-label={`Footer links ${index + 1}`}
                            >
                                <ul className="space-y-5">
                                    {group.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="text-3xl font-medium leading-none text-white transition hover:text-[#e53238] md:text-4xl"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                    <p className="select-none text-[clamp(4.2rem,15vw,15rem)] font-bold leading-[0.78] tracking-[-0.06em] text-white">
                        FILIA STUDIO
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-5 border-t border-white/12 pt-8 text-lg font-medium text-white/82 md:flex-row md:items-center md:justify-between">
                    <p>Copyright &copy; {new Date().getFullYear()} Filia Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
