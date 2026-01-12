
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md supports-backdrop-filter:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-8 w-8">
                        <Image src="/logo.jpeg" alt="Filia Studio" fill />
                    </div>
                    <span className="text-xl font-bold text-slate-900">Filia Studio</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="/#services" className="hover:text-blue-600 transition-colors">Services</Link>
                    <Link href="/#methodology" className="hover:text-blue-600 transition-colors">Methodology</Link>
                    <Link href="/#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Contact us</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
