import LocationCard from '@/components/LocationCard'
import { getLocations } from '@/lib/cosmic'

export const metadata = {
  title: 'Locations - Savor Restaurant',
  description: 'Find a Savor Restaurant near you.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="bg-brand-50 min-h-screen">
      <section className="bg-charcoal-900 text-white py-20">
        <div className="container-custom text-center">
          <p className="text-brand-300 uppercase tracking-widest text-sm font-medium mb-3">
            Visit Savor
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Locations</h1>
          <p className="text-charcoal-200 max-w-2xl mx-auto">
            Find a Savor near you. Each location offers our signature experience with its own unique charm.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {locations.length === 0 ? (
            <p className="text-center text-charcoal-600">No locations available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}