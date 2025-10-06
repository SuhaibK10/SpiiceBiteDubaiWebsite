"use client";
export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for your message! Form submission is disabled on this demo site.");
  }
  return (
    <section id="contact" className="bg-white py-16 sm:py-24 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354e36]">Contact</h2>
            <p className="mt-4 text-[#555]">Have a question or want to plan a group meal? Send us a message.</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input type="text" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-brand-green text-center" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-brand-green text-center" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea rows={4} required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-brand-green text-center" placeholder="Tell us what you need"></textarea>
              </div>
              <button type="submit" className="rounded-xl bg-brand-green px-6 py-3 text-white font-semibold shadow hover:bg-brand-green2 transition">Send Message</button>
            </form>
          </div>

          <div className="rounded-2xl border border-black/5 bg-[#f6efe6] p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="mt-2 text-[#555]">Dubai, UAE</p>
            <p className="mt-2 text-[#555]">Open daily · 11:00–23:00</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <a href={process.env.NEXT_PUBLIC_MENU_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-4 py-3 text-center ring-1 ring-black/10 hover:bg-amber-50">View Menu</a>
              <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-brand-green px-4 py-3 text-center text-white hover:bg-brand-green2">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
