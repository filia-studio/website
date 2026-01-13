"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full h-150 md:h-175 flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Team collaborating"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    className="max-w-2xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        Building the Future <br /> of Software
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-slate-200 max-w-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        Filia Studio transforms complex challenges into elegant digital
                        solutions. We engineer reliable systems designed for growth.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-base font-semibold"
                        >
                            <Link href="/contact">Work with us</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
