"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
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

  <div id="gallery-visuals" data-section="gallery-visuals">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      animationType="slide-up"
      products={[
        {
          id: "gallery-item-1",          name: "High-Visibility on Trucks",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-cross-street_158595-867.jpg",          imageAlt: "Reflective tape on a moving truck at night"},
        {
          id: "gallery-item-2",          name: "Steel Production Floor",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-worker-near-metalworking-machine_176420-4648.jpg",          imageAlt: "Factory floor with stacked steel sheets"},
        {
          id: "gallery-item-3",          name: "Custom Reflective Designs",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/colourful-circles-water-waves-top-view_23-2148358190.jpg",          imageAlt: "Colorful reflective decorative tape close up"},
        {
          id: "gallery-item-4",          name: "Dumper Safety Marking",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-person-working-construction-industry_23-2151349655.jpg",          imageAlt: "Dumper truck with reflective safety tape"},
        {
          id: "gallery-item-5",          name: "Architectural Steel Structures",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/inside-famous-brookfield-place-toronto-canada_181624-6947.jpg",          imageAlt: "Steel beam installation at a construction site"},
        {
          id: "gallery-item-6",          name: "Quality Control & Packaging",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/arranging-order-deliveries-using-invoice-identification-codes_482257-83415.jpg",          imageAlt: "Reflective tape product packaging in a warehouse"}
      ]}
      title="Visualizing Excellence: Our Products in Action"
      description="Explore a visual showcase of our reflective tapes and steel products, highlighting their quality, application, and impact in real-world industrial settings."
    />
  </div>

  <div id="gallery-project-stats" data-section="gallery-project-stats">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={true}
      animationType="slide-up"
      metrics={[
        {
          id: "gallery-metric-1",          value: "2000+",          title: "Fleet Vehicles Equipped",          items: [
            "Enhanced visibility",            "Reduced accidents",            "Regulatory compliance"]
        },
        {
          id: "gallery-metric-2",          value: "500,000 SQM",          title: "Steel Fabricated for Projects",          items: [
            "Large-scale infrastructure",            "Custom industrial builds",            "High-strength applications"]
        },
        {
          id: "gallery-metric-3",          value: "100%",          title: "Project Completion Rate",          items: [
            "Client satisfaction guaranteed",            "Timely delivery",            "Quality execution"]
        }
      ]}
      title="Project Highlights & Scale"
      description="Showcasing the magnitude and successful execution of our projects, from expansive steel installations to nationwide safety marking initiatives."
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
