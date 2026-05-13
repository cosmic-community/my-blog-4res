import type { MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = item.metadata?.price
  const image = item.metadata?.image
  const tags = item.metadata?.dietary_tags
  const available = item.metadata?.available !== false

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-100 flex flex-col">
      {image?.imgix_url && (
        <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-serif font-semibold text-charcoal-900">{name}</h3>
          {typeof price === 'number' && (
            <span className="text-lg font-bold text-brand-600 whitespace-nowrap">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        {description && (
          <p className="text-charcoal-600 text-sm mb-4 flex-1">{description}</p>
        )}
        <div className="flex items-center justify-between gap-2 flex-wrap mt-auto">
          {Array.isArray(tags) && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-brand-100 text-brand-800 rounded-full font-medium"
                >
                  {getMetafieldValue(tag)}
                </span>
              ))}
            </div>
          )}
          {!available && (
            <span className="text-xs px-2 py-1 bg-charcoal-200 text-charcoal-700 rounded-full font-medium">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  )
}