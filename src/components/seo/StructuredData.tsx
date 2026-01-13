export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Filia Studio",
        "url": "https://withfillia.com",
        "logo": "https://withfillia.com/logo.jpeg",
        "description": "Filia Studio transforms complex challenges into elegant digital solutions. We engineer reliable systems designed for growth.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5 Balogun Close, Addo",
            "addressLocality": "Ajah",
            "addressRegion": "Lagos",
            "addressCountry": "NG"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-903-512-2388",
            "contactType": "Customer Service",
            "email": "hello@withfillia.com",
            "availableLanguage": ["English"]
        },
        "sameAs": [
            "https://github.com/filia-studio"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Filia Studio",
        "url": "https://withfillia.com",
        "description": "Building the Future of Software",
        "publisher": {
            "@type": "Organization",
            "name": "Filia Studio"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Filia Studio",
        "image": "https://withfillia.com/logo.jpeg",
        "description": "Expert software development, web & mobile apps, UI/UX design, and cloud infrastructure services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5 Balogun Close, Addo",
            "addressLocality": "Ajah",
            "addressRegion": "Lagos",
            "addressCountry": "NG"
        },
        "telephone": "+234-903-512-2388",
        "email": "hello@withfillia.com",
        "url": "https://withfillia.com",
        "priceRange": "$$",
        "serviceType": [
            "Software Development",
            "Web Development",
            "Mobile App Development",
            "UI/UX Design",
            "Cloud Infrastructure",
            "IT Consulting"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
}
