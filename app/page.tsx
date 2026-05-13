import Link from 'next/link'
import Hero from '@/components/Hero'
import LocationCard from '@/components/LocationCard'
import { getMenuCategories, getMenuItems, getLocations, getReservationInfo } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function HomePage() {
  const [categories, items, locations, reservation] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
    getLocations(),
    getReservationInfo(),
  ])

  const featuredItems = items.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Featured Categories */}
      {categories.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-brand-600 uppercase tracking-widest text-sm font-medium mb-3">
                Our Menu
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
                Explore by Category
              </h2>
              <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                const name = getMetafieldValue(category.metadata?.name) || category.title
                return (
                  <Link
                    key={category.id}
                    href={`/menu#${category.slug}`}
                    className="bg-white border border-brand-100 rounded-lg p-6 text-center hover:shadow-lg hover:border-brand-300 transition-all group"
                  >
                    <h3 className="text-xl font-serif font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                      {name}
                    </h3>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Featured Dishes */}
      {featuredItems.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-brand-600 uppercase tracking-widest text-sm font-medium mb-3">
                Signature Dishes
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
                A Taste of Savor
              </h2>
              <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredItems.map((item) => {
                const name = getMetafieldValue(item.metadata?.name) || item.title
                const description = getMetafieldValue(item.metadata?.description)
                const price = item.metadata?.price
                const image = item.metadata?.image
                return (
                  <div key={item.id} className="bg-brand-50 rounded-lg overflow-hidden border border-brand-100">
                    {image?.imgix_url && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                          alt={name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-serif font-semibold text-charcoal-900">{name}</h3>
                        {typeof price === 'number' && (
                          <span className="text-brand-600 font-bold whitespace-nowrap">
                            ${price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {description && (
                        <p className="text-charcoal-600 text-sm">{description}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                See Full Menu
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Locations Preview */}
      {locations.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-brand-600 uppercase tracking-widest text-sm font-medium mb-3">
                Visit Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
                Our Locations
              </h2>
              <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.slice(0, 3).map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reservation CTA */}
      {reservation && (
        <section className="py-16 md:py-24 bg-charcoal-900 text-white">
          <div className="container-custom text-center max-w-3xl">
            <p className="text-brand-300 uppercase tracking-widest text-sm font-medium mb-3">
              Reserve Your Table
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {getMetafieldValue(reservation.metadata?.headline) || 'Book Your Experience'}
            </h2>
            {reservation.metadata?.description && (
              <p className="text-charcoal-200 mb-8 text-lg">
                {getMetafieldValue(reservation.metadata.description)}
              </p>
            )}
            <Link
              href="/reservations"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-md font-medium transition-colors text-lg"
            >
              Make a Reservation
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}