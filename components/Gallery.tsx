export default function Gallery() {
  const items = [
    { src: "/images/parathas.png", alt: "Stuffed Parathas", cap: "Stuffed Parathas" },
    { src: "/images/feast.png", alt: "Main Course Feast", cap: "Main Course Feast" },
    { src: "/images/pav_bhaji.png", alt: "Pav Bhaji", cap: "Pav Bhaji" },
    { src: "/images/drinks.png", alt: "Assorted Drinks", cap: "Assorted Drinks" },
    { src: "/images/thali.png", alt: "South Indian Thali", cap: "South Indian Thali" },
    { src: "/images/dessert.png", alt: "Sweet Desserts", cap: "Sweet Desserts" },
    { src: "/images/chole_bhature.png", alt: "Chole Bhature", cap: "Chole Bhature" },
    { src: "/images/poha.png", alt: "Poha", cap: "Poha" },
  ];
  return (
    <section id="gallery" className="py-8 sm:py-16 bg-white text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#354e36]">Gallery</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <figure key={it.alt} className="overflow-hidden rounded-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt={it.alt} className="h-44 w-full object-cover transition hover:scale-105" />
              <figcaption className="px-3 py-2 text-sm text-center">{it.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
