import Link from "next/link";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";

const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
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
        <footer className="relative overflow-hidden bg-[#0F1720] px-4 py-16 text-white md:px-8 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E7A97]/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1480px]">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_1.35fr]">
                    <div>
                        <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,5rem)] font-semibold leading-[0.95] tracking-normal">
                            Stay close to what Filia is building
                        </h2>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="inline-flex h-9 items-center gap-2 rounded-full bg-[#293241] px-4 text-white transition hover:bg-[#4E7A97]"
                                >
                                    <item.icon className="h-4 w-4" />
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid min-w-0 gap-10 md:grid-cols-2">
                        {[primaryLinks, contactLinks].map((group, index) => (
                            <nav
                                key={index}
                                className="min-w-0 border-l border-white/12 pl-5 md:pl-7"
                                aria-label={`Footer links ${index + 1}`}
                            >
                                <ul className="space-y-5">
                                    {group.map((item) => (
                                        <li key={item.label} className="min-w-0">
                                            <Link
                                                href={item.href}
                                                className="break-words text-xl font-medium leading-tight text-white transition hover:text-[#4E7A97] sm:text-2xl md:text-4xl md:leading-none"
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
