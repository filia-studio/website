
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
    return (
        <section className="py-24 bg-slate-900">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to transform your ideas?
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Whether you need a new mobile app or a complete digital transformation, Filia Studio is your partner in engineering excellence.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 h-12">
                            Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
