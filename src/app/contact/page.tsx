
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Plus } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Filia Studio. Let's discuss your project and how we can help transform your ideas into reality. Contact us via email, phone, or visit our office in Lagos.",
    openGraph: {
        title: "Contact Filia Studio",
        description: "Get in touch with Filia Studio. Let's discuss your project and how we can help transform your ideas into reality.",
        url: "https://withfillia.com/contact",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Filia Studio",
        description: "Get in touch with Filia Studio. Let's discuss your project and how we can help transform your ideas into reality."
    },
    alternates: {
        canonical: "/contact"
    }
}

export default function ContactPage() {
    return (
        <div className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Let&apos;s Start a Conversation</h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Have a project in mind? We&apos;d love to hear from you. Fill out the form below or reach out to us directly through our contact channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Contact Form */}
                    <div className="lg:col-span-6">
                        <Card className="p-8 bg-white border-slate-100 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname">Full Name</Label>
                                        <Input id="fullname" placeholder="John Doe" className="bg-slate-50! border-slate-200! text-slate-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Work Email</Label>
                                        <Input id="email" type="email" placeholder="john@company.com" className="bg-slate-50! border-slate-200! text-slate-900" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">How can we help?</Label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            className="flex h-10 w-full appearance-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-900 pr-8"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Custom Software Development</option>
                                            <option>UI/UX Design</option>
                                            <option>Cloud Infrastructure</option>
                                            <option>Consulting</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell us about your project</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Share a few details about your goals and timeline..."
                                        className="min-h-37.5 bg-slate-50! border-slate-200! text-slate-900 resize-none"
                                    />
                                </div>

                                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 h-auto text-base">
                                    Send Message &rarr;
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:col-span-6 space-y-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>

                        <div className="grid gap-4">
                            <Card className="p-4 flex items-start gap-4 hover:shadow-md transition-shadow cursor-default">
                                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Email Us</p>
                                    <p className="text-base font-semibold text-slate-900">hello@withfillia.com</p>
                                </div>
                            </Card>

                            <Card className="p-4 flex items-start gap-4 hover:shadow-md transition-shadow cursor-default">
                                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Call Us</p>
                                    <p className="text-base font-semibold text-slate-900">+234 903 512 2388</p>
                                </div>
                            </Card>

                            <Card className="p-4 flex items-start gap-4 hover:shadow-md transition-shadow cursor-default">
                                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Visit Us</p>
                                    <p className="text-base font-semibold text-slate-900">5 Balogun Close, Addo</p>
                                    <p className="text-sm font-semibold text-slate-900">Ajah, Lagos</p>
                                </div>
                            </Card>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <Link href="/" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-900 transition-all shadow-sm">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="/" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-900 transition-all shadow-sm">
                                {/* X Icon placeholder using Twitter icon but styled */}
                                <span className="font-bold text-lg">𝕏</span>
                            </Link>
                            <Link href="https://github.com/filia-studio" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-900 transition-all shadow-sm">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-32 max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="Which services do you provide?"
                            answer="We offer a comprehensive suite of digital services including web development, mobile app development (iOS & Android), UI/UX design, cloud infrastructure setup, and strategic IT consulting. We specialize in building scalable, high-performance solutions tailored to your business goals."
                        />
                        <FAQItem
                            question="Do you offer assistance with technical issues and customer support?"
                            answer="Yes, providing ongoing support is a core part of our partnership. We offer properly structured maintenance packages that include security updates, bug fixes, performance monitoring, and technical troubleshooting to ensure your product runs smoothly 24/7."
                        />
                        <FAQItem
                            question="Can you design custom products on request?"
                            answer="Absolutely. Custom product design is our specialty. We start with a discovery phase to understand your unique requirements, then move into prototyping and high-fidelity design to create a product that perfectly aligns with your vision and user needs."
                        />
                        <FAQItem
                            question="What's your business's financial model?"
                            answer="We operate with flexible engagement models to suit different project types. This includes fixed-price contracts for well-defined project scopes, and time-and-materials or dedicated team models for long-term or evolving projects. We believe in transparency and will help you choose the model that offers the best value."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950">
                <span className="text-base font-semibold">{question}</span>
                <span className="relative h-4 w-4 shrink-0 overflow-hidden">
                    <Plus className="absolute inset-0 h-4 w-4 transition-transform duration-200 group-open:rotate-45" />
                </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                {answer}
            </div>
        </details>
    )
}
