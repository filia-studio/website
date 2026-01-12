
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function Testimonials() {
    const testimonials = [
        {
            quote: "Filia Studio didn't just build software; they helped us reimagine our entire product strategy. Their team is technically brilliant and incredibly easy to work with.",
            author: "Marcus Chen",
            role: "CEO, Innovate Inc.",
            initials: "MC",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            quote: "We needed a partner who could move fast without breaking things. Filia delivered our MVP in record time, and the code quality was exceptional.",
            author: "Elena Rodriguez",
            role: "Founder, StartUp Flow",
            initials: "ER",
            gradient: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What our clients say</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-slate-50 border-none shadow-sm h-full flex flex-col justify-between">
                            <CardContent className="pt-8">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-blue-500 text-blue-500" />
                                    ))}
                                </div>
                                <blockquote className="text-lg text-slate-700 font-medium leading-relaxed">
                                    &quot;{t.quote}&quot;
                                </blockquote>
                            </CardContent>
                            <CardFooter className="flex items-center gap-4 pb-8">
                                <div className={`h-12 w-12 rounded-full bg-linear-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{t.author}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
