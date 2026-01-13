"use client";

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Stats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const stats = [
        { value: '10+', label: 'Years Experience' },
        { value: '50+', label: 'Projects Shipped' },
        { value: '25', label: 'Team Experts' },
        { value: '4', label: 'Global Offices' },
    ]

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200" ref={ref}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="space-y-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-blue-600">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
