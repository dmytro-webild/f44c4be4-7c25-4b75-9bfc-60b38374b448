import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'ReflectPro Solutions - Reflective Tapes & Steel Products',
  description: 'Leading manufacturer and supplier of high-visibility reflective tapes for vehicle safety and industrial steel sheets for construction and manufacturing. Your trusted B2B partner for durability and compliance.',
  keywords: ["Reflective Tape Manufacturer, Reflective Tape Supplier, Truck Reflective Tape, Vehicle Safety Marking, Road Safety Products, Conspicuity Tape, Reflective Decoration Products, Steel Sheet Supplier, Industrial Steel Solutions"],
  openGraph: {
    "title": "ReflectPro Solutions - Reflective Tapes & Steel Products",
    "description": "Leading manufacturer and supplier of high-visibility reflective tapes for vehicle safety and industrial steel sheets for construction and manufacturing. Your trusted B2B partner for durability and compliance.",
    "url": "/",
    "siteName": "ReflectPro Solutions",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-angle-shot-escalator-with-dirtproof-grating_181624-56931.jpg",
        "alt": "Industrial facility with trucks and steel sheets"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ReflectPro Solutions - Reflective Tapes & Steel Products",
    "description": "Leading manufacturer and supplier of high-visibility reflective tapes for vehicle safety and industrial steel sheets for construction and manufacturing. Your trusted B2B partner for durability and compliance.",
    "images": [
      "http://img.b2bpic.net/free-photo/low-angle-shot-escalator-with-dirtproof-grating_181624-56931.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
