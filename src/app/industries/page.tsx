"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Facebook, Linkedin, Twitter, Bus, Construction, Factory, Globe } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Industries",          id: "/industries"},
        {
          name: "Gallery",          id: "/gallery"},
        {
          name: "Certifications",          id: "/certifications"}
      ]}
      brandName="ReflectPro Solutions"
      button={{
        text: "Contact Us",        href: "/contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="industries-served-features" data-section="industries-served-features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Transportation & Logistics",          description: "Providing reflective tapes for fleet visibility, cargo safety, and compliance with road transport regulations, ensuring secure and efficient movement of goods.",          imageSrc: "http://img.b2bpic.net/free-photo/industries-served-1",          imageAlt: "Trucks parked at a logistics hub",          buttonIcon: Bus
        },
        {
          title: "Construction & Infrastructure",          description: "Supplying durable steel sheets for structural integrity and high-visibility tapes for site safety, essential for robust building and public works projects.",          imageSrc: "http://img.b2bpic.net/free-photo/industries-served-2",          imageAlt: "Construction workers on site safety",          buttonIcon: Construction
        },
        {
          title: "Industrial Manufacturing",          description: "From metal fabrication to machinery marking, our products enhance operational safety and provide critical components for heavy industry and production lines.",          imageSrc: "http://img.b2bpic.net/free-photo/industries-served-3",          imageAlt: "Factory production line steel work",          buttonIcon: Factory
        },
        {
          title: "Wholesale & International Trade",          description: "Partnering with wholesalers and international buyers, we provide bulk supply of reflective products and steel solutions with seamless global delivery and support.",          imageSrc: "http://img.b2bpic.net/free-photo/industries-served-4",          imageAlt: "Wholesaler warehouse inventory stacks",          buttonIcon: Globe
        }
      ]}
      title="Tailored Solutions for Diverse Industries"
      description="ReflectPro Solutions empowers businesses across key sectors with specialized products designed to meet their unique operational demands and safety requirements."
    />
  </div>

  <div id="industries-partners" data-section="industries-partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Global Cargo Connect",        "MegaBuild Group",        "Precision Machining Inc.",        "TransContinental Freight",        "Urban Development Corp.",        "Heavy Industry Solutions",        "World Trade Alliance"]}
      title="Partnering Across Key Sectors"
      description="Our clientele spans diverse industries, reflecting our versatility and capability to deliver tailored solutions that drive success in every sector."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ReflectPro Solutions"
      copyrightText="© 2024 ReflectPro Solutions. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"}
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
