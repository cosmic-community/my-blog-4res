import type { MenuCategory, MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'

interface CategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function CategorySection({ category, items }: CategorySectionProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  if (!items || items.length === 0) return null

  return (
    <section id={category.slug} className="mb-16 scroll-mt-24">
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-3">
          {name}
        </h2>
        {description && (
          <p className="text-charcoal-600 max-w-2xl mx-auto">{description}</p>
        )}
        <div className="mt-4 h-1 w-20 bg-brand-500 mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}