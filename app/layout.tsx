export const metadata = {
  title: "Spice Bite | A Veggie's Delight in Dubai",
  description:
    "Spice Bite — Fresh, flavorful vegetarian cuisine with Indian mains, snacks, Chinese specials, and desserts in Dubai.",
  icons: { icon: "/images/logo.png" },
  // Explicitly declare a viewport so the site renders nicely on mobile devices.
  // Without this the browser may not scale the page correctly on small screens.
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add scroll-smooth on the html tag to enable smooth scrolling between anchors.
    <html lang="en" className="scroll-smooth">
      {/*
        Add overflow-x-hidden on the body tag to prevent unintended horizontal scrolling
        when content overflows. Also retain the existing styling for minimum height,
        background colour and selection styling.
      */}
      <body className="min-h-screen bg-[#faf7f2] text-brand-ink selection:bg-amber-200/60 selection:text-brand-ink text-center overflow-x-hidden">
        <Navbar />
        {children}
        {/* Display the floating WhatsApp button; duplicating intentionally for now */}
        <FloatingWhatsApp />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
