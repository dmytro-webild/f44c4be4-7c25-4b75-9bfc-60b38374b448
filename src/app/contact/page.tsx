"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

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

  <div id="contact-form" data-section="contact-form">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Contact ReflectPro Solutions"
      description="Have questions about our products, need a custom quote, or want to discuss a partnership? Fill out the form below or connect with us directly on WhatsApp."
      inputPlaceholder="Your Email Address"
      buttonText="Send Inquiry"
      termsText="By clicking Send Inquiry, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="contact-info-metrics" data-section="contact-info-metrics">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Reach & Support Channels"
      metrics={[
        {
          icon: Phone,
          label: "Call Us Anytime",
          value: "+1 (800) 123-4567",
        },
        {
          icon: Mail,
          label: "Email Support",
          value: "info@reflectpro.com",
        },
        {
          icon: MapPin,
          label: "Head Office",
          value: "123 Industrial Drive, City, Country",
        },
      ]}
      metricsAnimation="slide-up"
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
