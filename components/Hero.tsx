import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://imgix.cosmicjs.com/13a57100-4e6c-11f1-8004-49554e815733-autopilot-photo-1517248135467-4c7edcad34c4-1778636151813.jpeg?w=2400&h=1400&fit=crop&auto=format,compress"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="text-brand-300 uppercase tracking-widest text-sm md:text-base mb-4 font-medium">
          Welcome to
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
          Savor
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          A modern dining experience celebrating seasonal ingredients,
          handcrafted dishes, and unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-md font-medium transition-colors text-lg"
          >
            View Menu
          </Link>
          <Link
            href="/reservations"
            className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/40 text-white px-8 py-3 rounded-md font-medium transition-colors text-lg"
          >
            Make Reservation
          </Link>
        </div>
      </div>
    </section>
  )
}