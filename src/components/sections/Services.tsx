import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Code2, PenTool, Cloud, Smartphone, Lightbulb, Globe } from 'lucide-react'

const services = [
    {
        title: 'Custom Software',
        description: 'Scalable enterprise solutions built from scratch using modern frameworks like React, Node.js, and Python.',
        icon: Code2,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Web Development',
        description: 'High-performance web applications, SaaS platforms, and responsive sites built with modern frameworks.',
        icon: Globe,
        color: 'bg-teal-100 text-teal-600',
    },
    {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
        icon: Smartphone,
        color: 'bg-violet-100 text-violet-600',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centric interfaces that drive engagement, focusing on intuitive workflows and accessibility.',
        icon: PenTool,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        title: 'Cloud Infrastructure',
        description: 'Secure and robust cloud architecture setup on AWS, Azure, or Google Cloud for maximum uptime.',
        icon: Cloud,
        color: 'bg-sky-100 text-sky-600',
    },
    {
        title: 'IT Consulting',
        description: 'Strategic advice on software architecture, digital transformation, and selecting the right tech stack for your goals.',
        icon: Lightbulb,
        color: 'bg-cyan-100 text-cyan-600',
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Offerings</h3>
                        <p className="text-slate-600 text-lg">
                            We provide end-to-end software development services tailored to your business needs, from initial concept to global scale.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card key={service.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardHeader className="space-y-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color}`}>
                                    <service.icon size={24} />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
