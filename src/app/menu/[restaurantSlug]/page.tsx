import { notFound } from 'next/navigation';
import { restaurants } from '../../../data/restaurants';
import CategoryNav from '../../../components/CategoryNav';
import MenuItemCard from '../../../components/MenuItemCard';
import { Search } from 'lucide-react';

export default async function RestaurantMenuPage({ params }: { params: Promise<{ restaurantSlug: string }> }) {
  const { restaurantSlug } = await params;
  const restaurant = restaurants.find(r => r.slug === restaurantSlug);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto">
        {/* Header Info */}
        <header className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">{restaurant.name}</h1>
              <p className="text-sm opacity-80" style={{ color: restaurant.theme.textMuted }}>
                {restaurant.description}
              </p>
            </div>
            {/* Search Button */}
            <button 
              className="p-2.5 rounded-full shadow-sm"
              style={{ backgroundColor: restaurant.theme.cardBg, color: restaurant.theme.text }}
            >
              <Search size={20} />
            </button>
          </div>
        </header>

        {/* Categories Nav (Sticky) */}
        <div className="sticky top-0 z-40 -mx-4 px-4 py-3 backdrop-blur-md bg-opacity-90" style={{ backgroundColor: `${restaurant.theme.background}ee` }}>
          <CategoryNav categories={restaurant.categories} activeColor={restaurant.theme.primary} />
        </div>

        {/* Menu Items */}
        <div className="mt-6 space-y-8">
          {restaurant.categories.map(category => {
            const categoryItems = restaurant.items.filter(item => item.categoryId === category.id);
            if (categoryItems.length === 0) return null;

            return (
              <section key={category.id} id={`category-${category.id}`} className="scroll-mt-24">
                <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                <div className="space-y-4">
                  {categoryItems.map(item => (
                    <MenuItemCard key={item.id} item={item} theme={restaurant.theme} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
  );
}

export function generateStaticParams() {
  return restaurants.map((r) => ({
    restaurantSlug: r.slug,
  }));
}
