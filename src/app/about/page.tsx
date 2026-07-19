import type { Metadata } from "next";
import { AboutExperience } from "@/components/about/AboutExperience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Filia Studio designs and builds websites, web applications, mobile apps, in-house products, and open source software.",
  openGraph: {
    title: "About Filia Studio",
    description:
      "A creative software studio building reliable websites, applications, in-house products, and open source tools for ambitious companies.",
    url: "https://withfillia.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Filia Studio",
    description:
      "A creative software studio building reliable websites, applications, in-house products, and open source tools.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutExperience />;
}
