
export function Stats() {
    const stats = [
        { value: '10+', label: 'Years Experience' },
        { value: '50+', label: 'Projects Shipped' },
        { value: '25', label: 'Team Experts' },
        { value: '4', label: 'Global Offices' },
    ]

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <h3 className="text-4xl md:text-5xl font-bold text-blue-600">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
