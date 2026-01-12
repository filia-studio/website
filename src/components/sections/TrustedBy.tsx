
import { Box, Layers, Zap, Hexagon, Infinity as InfinityIcon } from 'lucide-react'

const companies = [
    { name: 'NexTech', icon: Box },
    { name: 'Solara', icon: Layers },
    { name: 'Velocity', icon: Zap },
    { name: 'CubeSys', icon: Hexagon },
    { name: 'Infinity', icon: InfinityIcon },
]

export function TrustedBy() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Trusted by innovative teams worldwide
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <div key={company.name} className="flex items-center gap-2 group">
                            <company.icon className="h-6 w-6 text-slate-800 group-hover:text-blue-600 transition-colors" />
                            <span className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
