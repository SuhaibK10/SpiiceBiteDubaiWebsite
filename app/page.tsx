import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import SocialIcons from "@/components/SocialIcons";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Contact />
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Spice Bite. All rights reserved.</p>
          <div className="text-sm">Made with <span className="text-[#d6b079]">❤</span> for veggie lovers.</div>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto"><SocialIcons /></div>
        </div>
      </footer>
    </main>
  );
}
