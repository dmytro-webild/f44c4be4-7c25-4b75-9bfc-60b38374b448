"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Building, Building2, Facebook, Linkedin, Twitter, Users, Zap, Sparkles, Shield, Award } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "glowing-orb"}}
      logoText="ReflectPro Solutions"
      description="Your trusted partner in reflective safety and industrial steel solutions. Delivering unparalleled quality and innovation for diverse B2B needs."
      buttons={[
        {
          text: "Explore Products",          href: "/products"},
        {
          text: "Get a Quote",          href: "/contact"}
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-shot-escalator-with-dirtproof-grating_181624-56931.jpg"
      imageAlt="Industrial facility with trucks and steel sheets"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "High-Visibility Reflective Tapes",          description: "Engineered for maximum conspicuity, our tapes ensure superior visibility for trucks, trailers, buses, and all commercial vehicles, day and night.",          imageSrc: "http://img.b2bpic.net/free-photo/people-line-waiting-social-distance-stripe_23-2148863828.jpg",          imageAlt: "Rolls of high-visibility reflective tape",          buttonIcon: Zap
        },
        {
          title: "Custom Reflective Solutions",          description: "From bespoke decorative designs to specialized safety markings, we offer tailored reflective products that meet unique client specifications and branding needs.",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13116.jpg",          imageAlt: "Custom reflective decorative product",          buttonIcon: Sparkles
        },
        {
          title: "Premium Industrial Steel Sheets",          description: "Supplying high-grade steel sheets and advanced metal fabrication, our solutions are critical for construction, manufacturing, and heavy industry applications.",          imageSrc: "http://img.b2bpic.net/free-photo/warm-edge-lighting-open-section-blue-modern_169016-68924.jpg",          imageAlt: "Stacked industrial steel sheets",          buttonIcon: Shield
        },
        {
          title: "Uncompromised Quality & Compliance",          description: "All our products adhere to strict international safety standards and quality certifications, ensuring reliability and peace of mind for our B2B partners.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-warehouse_23-2148923072.jpg",          imageAlt: "Quality certification stamp",          buttonIcon: Award
        }
      ]}
      title="Leading the Industry in Safety & Durability"
      description="At ReflectPro Solutions, we combine cutting-edge technology with robust materials to provide products that stand the test of time and demanding environments."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Commitment to Excellence & Innovation"
      metrics={[
        {
          icon: Users,
          label: "Clients Served Globally",          value: "1500+"},
        {
          icon: Building,
          label: "Years in Business",          value: "25+"},
        {
          icon: Building2,
          label: "Production Capacity (tons/month)",          value: "500+"}
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products-home-showcase" data-section="products-home-showcase">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      animationType="slide-up"
      products={[
        {
          id: "product-home-1",          name: "Truck Conspicuity Tape",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-ribbon-roll-isolated-white-background_53876-42305.jpg",          imageAlt: "Reflective tape for commercial trucks"},
        {
          id: "product-home-2",          name: "Decorative Reflective Film",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/long-yellow-exposure-neon-lights-texture_23-2148328031.jpg",          imageAlt: "Decorative reflective product"},
        {
          id: "product-home-3",          name: "Industrial Steel Sheets",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-spiky-ferromagnetic-blurred-metal_23-2148253593.jpg",          imageAlt: "Stacked industrial steel sheets"},
        {
          id: "product-home-4",          name: "High-Visibility Safety Tape (Yellow)",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/yellow-paint-line-black-asphalt-road-surface-texture_23-2148139824.jpg",          imageAlt: "Yellow high-visibility safety tape"},
        {
          id: "product-home-5",          name: "High-Visibility Safety Tape (White)",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/service-worker-painting-car-auto-service_23-2149486985.jpg",          imageAlt: "White high-visibility safety tape"},
        {
          id: "product-home-6",          name: "Custom Metal Fabrication",          price: "Request Quote",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-man-disinfecting-hands-workshop-s-office_637285-9825.jpg",          imageAlt: "Custom metal fabrication solution"}
      ]}
      title="Innovative Solutions for Every Need"
      description="Discover our diverse range of high-performance reflective tapes and robust steel sheet solutions, engineered for maximum impact and longevity."
    />
  </div>

  <div id="operational-metrics" data-section="operational-metrics">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "metric-1",          value: "99.8%",          title: "On-Time Delivery",          items: [
            "Reliable logistics",            "Efficient scheduling",            "Global distribution network"]
        },
        {
          id: "metric-2",          value: "A+",          title: "Quality Assurance Rating",          items: [
            "Rigorous testing protocols",            "ISO certified processes",            "Continuous improvement"]
        },
        {
          id: "metric-3",          value: "15+",          title: "Countries Served",          items: [
            "International partnerships",            "Export compliance expertise",            "Tailored global solutions"]
        }
      ]}
      title="Unmatched Performance & Reliability"
      description="Our operational prowess ensures every product meets the highest standards, driving efficiency and client satisfaction across the globe."
    />
  </div>

  <div id="social-proof-home" data-section="social-proof-home">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Transporter Solutions",        "BuildTech Corp",        "IndusFab Industries",        "Global Logistics Inc.",        "City Roadworks Ltd.",        "SafeFleet Management",        "Premier Contracting"]}
      title="Trusted by Industry Leaders"
      description="Our commitment to quality and service has earned the trust of leading companies across transportation, construction, and manufacturing sectors."
    />
  </div>

  <div id="testimonials-home" data-section="testimonials-home">
      <TestimonialCardSixteen
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          role: "Logistics Director",          company: "Global Transport Co.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-man-with-orange-life-jacket_23-2147562089.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          name: "Michael Chen",          role: "Procurement Head",          company: "Construction Dynamics",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-desk-front-view_23-2149741202.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "Operations Manager",          company: "Industrial Steel Works",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-personal-shopper-working_23-2148924139.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",          name: "David Kim",          role: "Fleet Safety Officer",          company: "City Transit Authority",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-young-man-with-helmet_23-2148269289.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          name: "Jessica Lee",          role: "Wholesale Buyer",          company: "Safety Products Inc.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-with-arms-crossed-standing-factory_107420-96042.jpg",          imageAlt: "Jessica Lee"}
      ]}
      kpiItems={[
        {
          value: "99%",          label: "Client Satisfaction"},
        {
          value: "100%",          label: "Product Reliability"},
        {
          value: "4.9/5",          label: "Average Rating"}
      ]}
      title="What Our Clients Say About Us"
      description="Hear directly from our valued partners about how ReflectPro Solutions has consistently delivered on quality, reliability, and exceptional service."
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
