
import { Search, PencilRuler, Wrench, Rocket } from 'lucide-react'

const steps = [
    {
        phase: 'PHASE 1',
        title: 'Discovery',
        description: 'We begin by understanding your business goals, user needs, and technical requirements. This sets the foundation for a successful project.',
        icon: Search,
    },
    {
        phase: 'PHASE 2',
        title: 'Design',
        description: 'Our designers create intuitive prototypes and high-fidelity mockups. We iterate based on your feedback until the vision is perfect.',
        icon: PencilRuler,
    },
    {
        phase: 'PHASE 3',
        title: 'Build',
        description: 'Our engineers write clean, scalable code. We use agile sprints to deliver features incrementally and keep you updated on progress.',
        icon: Wrench,
    },
    {
        phase: 'PHASE 4',
        title: 'Deploy & Maintain',
        description: 'We launch your product to the world and provide ongoing support to ensure it stays secure, updated, and performing at its best.',
        icon: Rocket,
    },
]

export function Methodology() {
    return (
        <section id="methodology" className="py-24 bg-slate-50/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Methodology</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h3>
                    <p className="text-slate-600 text-lg">
                        Our agile process ensures transparency and quality at every stage of the development lifecycle.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-slate-200 border-l border-dashed border-slate-300 transform -translate-x-1/2" />

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex gap-8 md:gap-12 group">
                                    {/* Icon */}
                                    <div className="relative z-10 shrink-0">
                                        <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full border-2 border-blue-600 bg-white shadow-sm transition-transform group-hover:scale-105 duration-300">
                                            <step.icon className="h-6 w-6 md:h-10 md:w-10 text-blue-600" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2 md:pt-4 pb-2">
                                        <span className="text-blue-600 font-bold tracking-wide uppercase text-xs md:text-sm mb-1 block">
                                            {step.phase}
                                        </span>
                                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                                            {step.title}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
