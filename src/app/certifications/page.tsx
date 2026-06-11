"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "Industries",
          id: "/industries",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Certifications",
          id: "/certifications",
        },
      ]}
      brandName="ReflectPro Solutions"
      button={{
        text: "Contact Us",
        href: "/contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="certifications-display" data-section="certifications-display">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "ISO 9001:2015",
        "CE Certified",
        "DOT Compliant",
        "ASTM International",
        "TÜV SÜD Certified",
        "OHSAS 18001",
        "REACH Compliant",
      ]}
      title="Adhering to Global Standards"
      description="ReflectPro Solutions is committed to the highest quality and safety standards, holding numerous certifications recognized worldwide."
    />
  </div>

  <div id="faq-certifications" data-section="faq-certifications">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-cert-1",
          title: "What does ISO 9001:2015 mean for your products?",
          content: "ISO 9001:2015 certifies our commitment to robust quality management systems, ensuring consistent product quality and customer satisfaction.",
        },
        {
          id: "faq-cert-2",
          title: "Are your reflective tapes DOT compliant?",
          content: "Yes, our vehicle conspicuity tapes are fully compliant with DOT regulations, ensuring they meet federal safety standards for trucks and trailers.",
        },
        {
          id: "faq-cert-3",
          title: "What specific tests do your products undergo?",
          content: "Our products undergo rigorous testing including adhesion, reflectivity, durability, and weather resistance, adhering to ASTM and other relevant international standards.",
        },
        {
          id: "faq-cert-4",
          title: "Do you have CE certification for European markets?",
          content: "Absolutely. Many of our products carry the CE mark, indicating compliance with European health, safety, and environmental protection standards.",
        },
        {
          id: "faq-cert-5",
          title: "How does ReflectPro ensure environmental compliance?",
          content: "We adhere to international environmental regulations like REACH, ensuring that our products and processes minimize environmental impact and are free from harmful substances.",
        },
        {
          id: "faq-cert-6",
          title: "Can you provide documentation for your certifications?",
          content: "Yes, all certification documents are available upon request for our B2B partners to review and ensure compliance for their projects.",
        },
      ]}
      title="Understanding Our Quality & Compliance"
      description="Have questions about our certifications, quality assurance, or compliance with industry standards? Find your answers here."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ReflectPro Solutions"
      copyrightText="© 2024 ReflectPro Solutions. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Linkedin,
          href: "#",
          ariaLabel: "LinkedIn",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
