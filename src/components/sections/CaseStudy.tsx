
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle2, TrendingUp } from 'lucide-react'

export function CaseStudy() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            CASE STUDY
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Revolutionizing FinTech with <span className="text-blue-600">FiliaFlow</span>
                        </h2>

                        <p className="text-lg text-slate-600">
                            We partnered with a leading financial institution to rebuild their core transaction processing engine. The result? A 300% increase in transaction speed and a user interface that reduced support tickets by 40%.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-blue-600 h-6 w-6 shrink-0" />
                                <span className="font-semibold text-slate-900">Real-Time Analytics</span>
                            </div>
                            <p className="pl-9 text-sm text-slate-500">Instant visibility into millions of daily transactions.</p>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-blue-600 h-6 w-6 shrink-0" />
                                <span className="font-semibold text-slate-900">Bank-Grade Security</span>
                            </div>
                            <p className="pl-9 text-sm text-slate-500">Encrypted end-to-end AED-256 cloud architecture.</p>
                        </div>

                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8">
                            Read Case Study
                        </Button>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                            {/* 
                  Assuming a square-ish aspect ratio for the container 
                  or just fitting the image 
               */}
                            <Image
                                src="/dashboard-mockup.png"
                                alt="FiliaFlow Dashboard"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-500">Growth</p>
                                    <p className="text-2xl font-bold text-slate-900">+127%</p>
                                    <p className="text-[10px] text-slate-400">Year over Year</p>
                                </div>
                            </div>
                        </div>
                        {/* Background decoration elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
                    </div>

                </div>
            </div>
        </section>
    )
}
