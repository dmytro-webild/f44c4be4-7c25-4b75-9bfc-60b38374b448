"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
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

  <div id="about-metrics-detailed" data-section="about-metrics-detailed">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "about-metric-1",
          value: "1 Million+",
          title: "Meters of Tape Produced",
          items: [
            "High-volume manufacturing",
            "Advanced production lines",
            "Sustainable material sourcing",
          ],
        },
        {
          id: "about-metric-2",
          value: "50,000+",
          title: "Tons of Steel Supplied",
          items: [
            "Diverse steel grades",
            "Custom fabrication services",
            "Reliable supply chain",
          ],
        },
        {
          id: "about-metric-3",
          value: "300+",
          title: "Successful Industrial Projects",
          items: [
            "Complex project management",
            "Tailored client solutions",
            "On-time, on-budget delivery",
          ],
        },
      ]}
      title="Our Journey and Impact in Numbers"
      description="Since our inception, ReflectPro Solutions has consistently grown, expanding our reach and enhancing our capabilities to better serve global industries."
    />
  </div>

  <div id="our-team" data-section="our-team">
      <TeamCardEleven
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "leadership",
          groupTitle: "Leadership Team",
          members: [
            {
              id: "member-1",
              title: "CEO & Founder",
              subtitle: "John Smith",
              detail: "Visionary leader driving innovation and strategic growth.",
              imageSrc: "http://img.b2bpic.net/free-photo/older-man-home-using-tablet-device_23-2148991657.jpg",
              imageAlt: "John Smith",
            },
            {
              id: "member-2",
              title: "COO",
              subtitle: "Jane Doe",
              detail: "Oversees all operational processes and supply chain management.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg",
              imageAlt: "Jane Doe",
            },
            {
              id: "member-3",
              title: "Head of Sales",
              subtitle: "Robert Brown",
              detail: "Leads our global sales initiatives and client relationships.",
              imageSrc: "http://img.b2bpic.net/free-photo/senior-man-looking-camera-smiling-sitting-workplace-desk_482257-5730.jpg",
              imageAlt: "Robert Brown",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-escalator-with-dirtproof-grating_181624-56931.jpg",
          imageAlt: "male CEO professional portrait",
        },
        {
          id: "production",
          groupTitle: "Production & Engineering",
          members: [
            {
              id: "member-4",
              title: "Head of Production",
              subtitle: "Emily White",
              detail: "Manages manufacturing excellence and efficiency.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
              imageAlt: "Emily White",
            },
            {
              id: "member-5",
              title: "R&D Director",
              subtitle: "David Green",
              detail: "Innovating new reflective and steel product solutions.",
              imageSrc: "http://img.b2bpic.net/free-photo/engineer-photovoltaics-factory-taking-notes-upgrades-make_482257-118451.jpg",
              imageAlt: "David Green",
            },
            {
              id: "member-6",
              title: "Procurement Manager",
              subtitle: "Sophia Black",
              detail: "Ensures quality material sourcing and cost-effectiveness.",
              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12838.jpg",
              imageAlt: "Sophia Black",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/people-line-waiting-social-distance-stripe_23-2148863828.jpg",
          imageAlt: "male CEO professional portrait",
        },
        {
          id: "support",
          groupTitle: "Support & Quality",
          members: [
            {
              id: "member-7",
              title: "Finance Director",
              subtitle: "Daniel Wilson",
              detail: "Manages financial strategy and fiscal responsibility.",
              imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-sitting-couch_1098-2454.jpg",
              imageAlt: "Daniel Wilson",
            },
            {
              id: "member-8",
              title: "Marketing Manager",
              subtitle: "Olivia Clark",
              detail: "Develops our brand presence and market outreach.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-saleswoman-working-office-sitting-business-room-reading-writing-down_1258-193622.jpg",
              imageAlt: "Olivia Clark",
            },
            {
              id: "member-9",
              title: "QA Manager",
              subtitle: "Chris Lee",
              detail: "Ensures all products meet stringent quality standards.",
              imageSrc: "http://img.b2bpic.net/free-photo/mature-business-manager-office_1098-21368.jpg",
              imageAlt: "Chris Lee",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/warm-edge-lighting-open-section-blue-modern_169016-68924.jpg",
          imageAlt: "male CEO professional portrait",
        },
      ]}
      title="Meet Our Expert Team"
      description="Our dedicated professionals bring a wealth of experience and expertise to every aspect of our business, ensuring top-tier service and innovative solutions."
    />
  </div>

  <div id="faq-about" data-section="faq-about">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-about-1",
          title: "What is ReflectPro Solutions' core mission?",
          content: "Our mission is to be the leading provider of innovative reflective safety tapes and high-quality industrial steel solutions, fostering safety and efficiency across global industries.",
        },
        {
          id: "faq-about-2",
          title: "Where are ReflectPro Solutions' products manufactured?",
          content: "All our products are manufactured in our state-of-the-art facilities, adhering to strict quality control and international production standards.",
        },
        {
          id: "faq-about-3",
          title: "How does ReflectPro ensure product quality?",
          content: "We implement rigorous testing protocols, quality assurance programs, and continuous process improvements, all backed by ISO certifications, to guarantee superior product quality.",
        },
        {
          id: "faq-about-4",
          title: "Does ReflectPro offer custom product development?",
          content: "Yes, we specialize in customized solutions for both reflective tapes and steel products, working closely with clients to meet their specific design and functional requirements.",
        },
        {
          id: "faq-about-5",
          title: "What are ReflectPro's sustainability practices?",
          content: "We are committed to sustainable manufacturing, utilizing eco-friendly materials, optimizing energy consumption, and minimizing waste throughout our production cycles.",
        },
        {
          id: "faq-about-6",
          title: "What is ReflectPro's global reach?",
          content: "ReflectPro Solutions serves clients in over 15 countries, supported by a robust logistics network and dedicated international sales teams.",
        },
      ]}
      title="Common Questions About ReflectPro Solutions"
      description="Find answers to frequently asked questions regarding our company's mission, values, and operational procedures."
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
