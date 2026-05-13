import Link from 'next/link'
import CategorySection from '@/components/CategorySection'
import { getMenuCategories, getMenuItems, getMetafieldValue } from '@/lib/cosmic'
import type { MenuItem } from '@/types'

export const metadata = {
  title: 'Menu - Savor Restaurant',
  description: 'Explore our seasonal menu featuring handcrafted dishes.',
}

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  // Group items by category id
  const itemsByCategory: Record<string, MenuItem[]> = {}
  for (const item of items) {
    const categoryId = item.metadata?.category?.id
    if (categoryId) {
      if (!itemsByCategory[categoryId]) {
        itemsByCategory[categoryId] = []
      }
      itemsByCategory[categoryId]!.push(item)
    }
  }

  return (
    <div className="bg-brand-50">
      {/* Page Header */}
      <section className="bg-charcoal-900 text-white py-20">
        <div className="container-custom text-center">
          <p className="text-brand-300 uppercase tracking-widest text-sm font-medium mb-3">
            Our Cuisine
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Menu</h1>
          <p className="text-charcoal-200 max-w-2xl mx-auto">
            Discover our seasonal offerings, crafted with care from the finest ingredients.
          </p>
        </div>
      </section>

      {/* Category Quick Nav */}
      {categories.length > 0 && (
        <div className="bg-white border-b border-brand-100 sticky top-[68px] z-30">
          <div className="container-custom py-4 flex gap-2 md:gap-4 overflow-x-auto">
            {categories.map((category) => {
              const name = getMetafieldValue(category.metadata?.name) || category.title
              const items = itemsByCategory[category.id]
              if (!items || items.length === 0) return null
              return (
                <Link
                  key={category.id}
                  href={`#${category.slug}`}
                  className="whitespace-nowrap px-4 py-2 text-sm font-medium text-charcoal-700 hover:bg-brand-100 hover:text-brand-700 rounded-md transition-colors"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Categories with items */}
      <section className="py-16">
        <div className="container-custom">
          {categories.length === 0 ? (
            <p className="text-center text-charcoal-600">No menu items available yet.</p>
          ) : (
            categories.map((category) => {
              const categoryItems = itemsByCategory[category.id]
              if (!categoryItems || categoryItems.length === 0) return null
              return (
                <CategorySection
                  key={category.id}
                  category={category}
                  items={categoryItems}
                />
              )
            })
          )}
        </div>
      </section>
    </div>
  )
}