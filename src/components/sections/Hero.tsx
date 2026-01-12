
import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
                <div className="absolute inset-0 bg-slate-900/70" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-2xl space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Building the Future <br /> of Software
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200">
                        Filia Studio transforms complex challenges into elegant digital solutions.
                        We engineer reliable systems designed for growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base font-semibold">
                            Work with us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
