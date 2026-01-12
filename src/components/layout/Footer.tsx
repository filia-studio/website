
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="relative h-8 w-8">
                            <Image src="/logo.jpeg" alt="Filia Studio" fill />
                        </div>
                        <span className="text-xl font-bold">Filia Studio</span>
                    </Link>
                    <p className="text-sm">© 2023 Filia Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
