"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-8 md:pt-7">
            <div className="mx-auto flex h-[4.7rem] max-w-[1480px] items-center justify-between rounded-full border border-white/12 bg-[#080808]/72 px-3 shadow-[0_26px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                <Link href="/" className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ef343b] text-xl font-bold text-white md:h-14 md:w-14">
                        F
                    </span>
                    <span className="truncate text-2xl font-semibold text-white md:text-3xl">
                        Filia Studio
                    </span>
                </Link>

                <nav className="hidden items-center gap-10 text-lg font-medium text-white/56 lg:flex">
                    <Link href="/#studio" className="transition-colors hover:text-white">Studio</Link>
                    <Link href="/#services" className="transition-colors hover:text-white">Services</Link>
                    <Link href="/#process" className="transition-colors hover:text-white">Process</Link>
                    <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
                </nav>

                <Link
                    href="/contact"
                    className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-5 text-base font-semibold text-black transition hover:bg-[#ef343b] hover:text-white md:h-14 md:px-7 md:text-lg"
                >
                    Book intro <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
            </div>
        </header>
    );
}
