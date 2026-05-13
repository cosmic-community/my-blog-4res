import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-200 mt-16">
      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-brand-300 mb-3">Savor</h3>
          <p className="text-sm text-charcoal-300">
            A modern dining experience celebrating seasonal ingredients and craft cuisine.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-brand-300 transition-colors">Our Menu</Link></li>
            <li><Link href="/locations" className="hover:text-brand-300 transition-colors">Locations</Link></li>
            <li><Link href="/reservations" className="hover:text-brand-300 transition-colors">Reservations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Visit Us</h4>
          <p className="text-sm text-charcoal-300">
            View our locations page for addresses, hours, and contact info for each restaurant.
          </p>
        </div>
      </div>
      <div className="border-t border-charcoal-800 py-4 text-center text-xs text-charcoal-400">
        © {new Date().getFullYear()} Savor Restaurant. All rights reserved.
      </div>
    </footer>
  )
}