import Link from 'next/link'
import type { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function LocationCard({ location }: { location: Location }) {
  const name = getMetafieldValue(location.metadata?.location_name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const photo = location.metadata?.photo

  return (
    <Link
      href={`/locations/${location.slug}`}
      className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-100 group"
    >
      {photo?.imgix_url && (
        <div className="aspect-[16/9] overflow-hidden bg-charcoal-100">
          <img
            src={`${photo.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={name}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-2 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {address && (
          <p className="text-charcoal-600 text-sm mb-2 whitespace-pre-line">{address}</p>
        )}
        {phone && (
          <p className="text-brand-600 font-medium text-sm">{phone}</p>
        )}
        <span className="inline-block mt-4 text-brand-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
          View Details →
        </span>
      </div>
    </Link>
  )
}