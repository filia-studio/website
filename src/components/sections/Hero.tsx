import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-150 md:h-175 flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Team collaborating"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-2xl space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Building the Future <br /> of Software
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-lg">
                        Filia Studio transforms complex challenges into elegant digital
                        solutions. We engineer reliable systems designed for growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-base font-semibold"
                        >
                            <Link href="/contact">Work with us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
