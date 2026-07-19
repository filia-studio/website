"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-7">
      <div className="mx-auto flex h-16 max-w-370 items-center justify-between rounded-full border border-[#DCE6EE]/16 bg-[#0F1720]/64 px-2 shadow-[0_26px_90px_rgba(15,23,32,0.42)] backdrop-blur-4xl md:h-[4.7rem] md:px-3">
        <Link href="/" className="flex min-w-0 items-center gap-3 px-3 md:gap-4 md:px-4">
          <Image
            src="/logo.png"
            alt="Filia Studio logo"
            width={36}
            height={42}
            priority
            className="h-8 w-auto md:h-10"
          />
          <span className="truncate text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            Filia Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-lg font-medium text-white/76 lg:flex">
          <Link href="/#studio" className="transition-colors hover:text-white">
            Studio
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link
            href="/#services"
            className="transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link href="/#process" className="transition-colors hover:text-white">
            Process
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#F7F5F0] px-4 text-sm font-semibold text-[#0F1720] transition hover:bg-[#4E7A97] hover:text-white md:h-14 md:px-7 md:text-lg"
        >
          <span className="sm:hidden">Book</span>
          <span className="hidden sm:inline">Book intro</span>
          <ArrowRight className="ml-2 h-4 w-4 md:ml-3 md:h-5 md:w-5" />
        </Link>
      </div>
    </header>
  );
}
