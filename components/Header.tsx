import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-charcoal-900 text-white sticky top-0 z-40 shadow-lg">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-brand-300 hover:text-brand-200 transition-colors">
          Savor
        </Link>
        <nav className="flex items-center gap-4 md:gap-8 text-sm md:text-base">
          <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-brand-300 transition-colors">Menu</Link>
          <Link href="/locations" className="hover:text-brand-300 transition-colors">Locations</Link>
          <Link
            href="/reservations"
            className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Reserve
          </Link>
        </nav>
      </div>
    </header>
  )
}