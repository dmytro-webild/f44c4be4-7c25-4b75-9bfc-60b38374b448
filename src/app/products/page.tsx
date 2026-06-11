"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
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

  <div id="products-all" data-section="products-all">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "products-all-1",
          name: "Vehicle Conspicuity Tapes",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-glasses-abstract-table_23-2149974224.jpg",
          imageAlt: "Truck side reflective conspicuity tape",
        },
        {
          id: "products-all-2",
          name: "High-Visibility Safety Tapes",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-man-with-raised-palm_1149-1123.jpg",
          imageAlt: "Industrial orange reflective safety tape",
        },
        {
          id: "products-all-3",
          name: "Reflective Decorative Films",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-prism-lights-copy-space_23-2148771724.jpg",
          imageAlt: "Decorative reflective vinyl patterns",
        },
        {
          id: "products-all-4",
          name: "Industrial Grade Steel Sheets",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/black-fabric-closeup_53876-31992.jpg",
          imageAlt: "Steel plate heavy industrial material",
        },
        {
          id: "products-all-5",
          name: "Custom Metal Fabrication",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metal-keys_23-2148796579.jpg",
          imageAlt: "Precision cut metal components steel",
        },
        {
          id: "products-all-6",
          name: "Bus Safety Marking Tapes",
          price: "Inquire for Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/black-car-driving-road-with-yellow-zebra-crossing_23-2148139931.jpg",
          imageAlt: "Reflective bus safety marking tape",
        },
      ]}
      title="Our Comprehensive Product Range"
      description="Explore our full catalog of high-performance reflective tapes and durable steel sheet solutions, engineered for reliability and compliance in diverse industrial applications."
    />
  </div>

  <div id="product-applications" data-section="product-applications">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Enhanced Vehicle Safety",
          description: "Ensure the highest level of visibility for your fleet, preventing accidents and complying with stringent road safety regulations for all commercial vehicles.",
          imageSrc: "http://img.b2bpic.net/free-photo/fast-truck_1048-1846.jpg",
          imageAlt: "Truck on highway with reflective tape",
          buttonIcon: "Truck",
        },
        {
          title: "Construction Site Hazard Marking",
          description: "From heavy machinery to temporary structures, our reflective tapes provide essential hazard warnings and delineate safe zones in dynamic construction environments.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-plus-size-woman-working-construction_23-2150772861.jpg",
          imageAlt: "Construction site reflective safety vests",
          buttonIcon: "HardHat",
        },
        {
          title: "Custom Branding & Aesthetics",
          description: "Elevate your brand or product appearance with bespoke reflective decorative products, offering unique visual appeal and enhanced recognition.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-beautiful-woman-jogging_329181-16736.jpg",
          imageAlt: "Decorative reflective accents on car",
          buttonIcon: "Paintbrush",
        },
        {
          title: "Robust Industrial Infrastructure",
          description: "Our steel sheet solutions form the backbone of industrial facilities, heavy equipment, and critical infrastructure, guaranteeing strength and longevity.",
          imageSrc: "http://img.b2bpic.net/free-photo/building-structure_1127-2019.jpg",
          imageAlt: "Steel structure for industrial building",
          buttonIcon: "Hammer",
        },
      ]}
      title="Versatile Applications Across Industries"
      description="Our products are designed for maximum performance and adaptability, serving critical functions in a multitude of industrial and commercial settings."
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
