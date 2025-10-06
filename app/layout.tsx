export const metadata = {
  title: "Spice Bite | A Veggie's Delight in Dubai",
  description:
    "Spice Bite — Fresh, flavorful vegetarian cuisine with Indian mains, snacks, Chinese specials, and desserts in Dubai.",
  icons: { icon: "/images/logo.png" },
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#faf7f2] text-brand-ink selection:bg-amber-200/60 selection:text-brand-ink text-center">
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
