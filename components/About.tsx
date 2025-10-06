export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 place-items-center">
          <div className="overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/main.jpg" alt="Chefs preparing vegetarian dishes" className="h-full w-full object-cover" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354e36]">About Us</h2>
            <p className="mt-4 leading-7 text-[#555]">
              We celebrate vibrant vegetarian flavors—classic Indian mains, street-style snacks, and Indo-Chinese favorites.
              Fresh ingredients, cozy ambience, and a menu that balances comfort with creativity.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 place-items-center">
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-green"></span>100% Vegetarian</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-green"></span>Family-friendly</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-green"></span>Delivery partners</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-green"></span>Event catering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
