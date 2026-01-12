import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Services } from "@/components/sections/Services"
// import { CaseStudy } from "@/components/sections/CaseStudy"
import { Stats } from "@/components/sections/Stats"
import { Testimonials } from "@/components/sections/Testimonials"
import { Methodology } from "@/components/sections/Methodology"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      {/* <CaseStudy /> */}
      <Stats />
      <Methodology />
      <Testimonials />
      <CTA />
    </>
  )
}
