"use client";

import { Box, Layers, Zap, Hexagon, Infinity as InfinityIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const companies = [
    { name: 'NexTech', icon: Box },
    { name: 'Solara', icon: Layers },
    { name: 'Velocity', icon: Zap },
    { name: 'CubeSys', icon: Hexagon },
    { name: 'Infinity', icon: InfinityIcon },
]

export function TrustedBy() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <section className="py-12 bg-white border-b border-slate-100" ref={ref}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Trusted by innovative teams worldwide
                    </p>
                </motion.div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            className="flex items-center gap-2 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <company.icon className="h-6 w-6 text-slate-800 group-hover:text-blue-600 transition-colors" />
                            <span className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors">{company.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
