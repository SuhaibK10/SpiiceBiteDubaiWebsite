import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <Image src="/images/hero.jpg" alt="Table spread of vegetarian dishes" fill priority className="object-cover" />
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-4rem)] flex items-center justify-center text-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">Spice Bite</h1>
          <p className="mt-3 text-lg sm:text-xl text-white/90">A Veggie&apos;s Delight in Dubai</p>
          <p className="mt-3 text-lg sm:text-xl text-white/90">A Symphony of Flavors</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand-green px-6 py-3 text-white font-semibold shadow hover:bg-brand-green2 transition"
            >
              Our Menu
            </a>
            <a href="#about" className="rounded-xl bg-white/10 px-6 py-3 text-white font-semibold ring-1 ring-white/40 hover:bg-white/20 transition">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
