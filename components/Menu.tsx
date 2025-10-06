export default function Menu() {
  const cards = [
    { img: "/images/snack.jpg", title: "Snacks & Chaat", text: "Crispy, tangy and totally addictive street-style bites." },
    { img: "/images/chinese.jpg", title: "Chinese Specials", text: "Indo-Chinese sizzlers, noodles, fried rice and more." },
    { img: "/images/main.jpg", title: "Main Course", text: "Homestyle curries, rich gravies and fresh breads." },
    { img: "/images/parathas.png", title: "Parathas", text: "Stuffed, butter-brushed and served hot." },
    { img: "/images/dessert.png", title: "Sweet Endings", text: "Kulfi, falooda and seasonal specials." },
    { img: "/images/drinks.png", title: "Drinks", text: "Coolers, shakes and masala chai." },
  ];
  return (
    <section id="menu" className="py-16 sm:py-24 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354e36]">Menu</h2>
        <p className="mt-2 text-[#555]">A snapshot of our crowd-favorites. Visit us for the full spread!</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} className="h-44 w-full rounded-t-2xl object-cover group-hover:opacity-95 transition" />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-[#555]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
