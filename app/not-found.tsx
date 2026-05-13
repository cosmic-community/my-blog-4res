import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-brand-50 min-h-[60vh] flex items-center justify-center">
      <div className="container-custom text-center py-20">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-charcoal-900 mb-4">404</h1>
        <p className="text-xl text-charcoal-600 mb-8">Sorry, we couldn't find that page.</p>
        <Link
          href="/"
          className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}