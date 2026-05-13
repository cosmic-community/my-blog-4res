// app/locations/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLocation, getMetafieldValue } from '@/lib/cosmic'

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = await getLocation(slug)

  if (!location) {
    notFound()
  }

  const name = getMetafieldValue(location.metadata?.location_name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const email = getMetafieldValue(location.metadata?.email)
  const hours = getMetafieldValue(location.metadata?.hours)
  const mapUrl = getMetafieldValue(location.metadata?.map_url)
  const photo = location.metadata?.photo

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-charcoal-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-brand-300 uppercase tracking-widest text-sm font-medium mb-3">
              Location
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold">{name}</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-5xl">
          <Link
            href="/locations"
            className="inline-block mb-8 text-brand-600 hover:text-brand-700 font-medium"
          >
            ← All Locations
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white rounded-lg p-8 border border-brand-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
                Contact & Location
              </h2>
              {address && (
                <div className="mb-5">
                  <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                    Address
                  </p>
                  <p className="text-charcoal-700 whitespace-pre-line">{address}</p>
                </div>
              )}
              {phone && (
                <div className="mb-5">
                  <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                    Phone
                  </p>
                  <a href={`tel:${phone}`} className="text-charcoal-700 hover:text-brand-600 transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="mb-5">
                  <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                    Email
                  </p>
                  <a href={`mailto:${email}`} className="text-charcoal-700 hover:text-brand-600 transition-colors break-all">
                    {email}
                  </a>
                </div>
              )}
              {mapUrl && (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
                >
                  Get Directions
                </a>
              )}
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-8 border border-brand-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Hours</h2>
              {hours ? (
                <div className="text-charcoal-700 whitespace-pre-line leading-relaxed">
                  {hours}
                </div>
              ) : (
                <p className="text-charcoal-500">Hours coming soon.</p>
              )}
            </div>
          </div>

          {/* Reservation CTA */}
          <div className="mt-10 bg-charcoal-900 text-white rounded-lg p-10 text-center">
            <h3 className="text-3xl font-serif font-bold mb-3">
              Ready to dine with us?
            </h3>
            <p className="text-charcoal-200 mb-6">
              Reserve your table at our {name} location today.
            </p>
            <Link
              href="/reservations"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}