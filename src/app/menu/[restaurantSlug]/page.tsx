import { notFound } from 'next/navigation';
import { restaurants } from '../../../data/restaurants';
import CategoryNav from '../../../components/CategoryNav';
import MenuItemCard from '../../../components/MenuItemCard';
import BanazoMenu from '../../../components/BanazoMenu';
import GrillrxMenu from '../../../components/GrillrxMenu';
import BurgerInnMenu from '../../../components/BurgerInnMenu';
import { Search, ShoppingBag } from 'lucide-react';

export default async function RestaurantMenuPage({ params }: { params: Promise<{ restaurantSlug: string }> }) {
  const { restaurantSlug } = await params;
  const restaurant = restaurants.find(r => r.slug === restaurantSlug);

  if (!restaurant) {
    notFound();
  }

  if (restaurant.slug === 'banazo') {
    return <BanazoMenu restaurant={restaurant} />;
  }

  if (restaurant.slug === 'grillax') {
    return <GrillrxMenu restaurant={restaurant} />;
  }

  if (restaurant.slug === 'burger-inn') {
    return <BurgerInnMenu restaurant={restaurant} />;
  }

  return (
    <div className="pb-32 bg-cover bg-center min-h-screen relative max-w-md mx-auto border-x" style={{ backgroundColor: restaurant.theme.background, borderColor: `${restaurant.theme.text}10` }}>
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 px-4 py-3 flex justify-between items-center backdrop-blur-md bg-opacity-90 border-b shadow-sm" style={{ backgroundColor: `${restaurant.theme.background}f0`, borderColor: `${restaurant.theme.primary}20` }}>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-xl" style={{ backgroundColor: restaurant.theme.cardBg }}>
            {restaurant.logo}
          </div>
          <div>
            <h1 className="font-bold text-[16px] leading-tight" style={{ color: restaurant.theme.text }}>{restaurant.name}</h1>
            <p className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: restaurant.theme.textMuted }}>Table 4</p>
          </div>
        </div>
        <button 
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
          style={{ backgroundColor: restaurant.theme.cardBg, color: restaurant.theme.text }}
        >
          <Search size={20} />
        </button>
      </header>

      {/* Hero Section */}
      {restaurant.hero && (
        <div className="relative w-full h-[240px] flex items-center justify-center text-center px-6 bg-gray-900">
          <div className="absolute inset-0 z-0">
            <img src={restaurant.hero.image} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight leading-none drop-shadow-md">{restaurant.hero.title}</h2>
            <p className="text-white/90 text-[13px] font-medium drop-shadow-sm max-w-[280px] leading-snug">{restaurant.hero.subtitle}</p>
          </div>
        </div>
      )}

      <div className="px-4">
        {/* Categories Nav (Sticky just below header) */}
        <div className="sticky top-[61px] z-40 -mx-4 px-4 py-3 backdrop-blur-md bg-opacity-95 shadow-sm border-b" style={{ backgroundColor: `${restaurant.theme.background}fa`, borderColor: `${restaurant.theme.primary}10` }}>
          <CategoryNav categories={restaurant.categories} activeColor={restaurant.theme.primary} />
        </div>

        {/* Menu Items */}
        <div className="mt-5 space-y-8">
          {restaurant.categories.map(category => {
            const categoryItems = restaurant.items.filter(item => item.categoryId === category.id);
            if (categoryItems.length === 0) return null;

            return (
              <section key={category.id} id={`category-${category.id}`} className="scroll-mt-32">
                <h2 className="text-[19px] font-black mb-4 uppercase tracking-wide flex items-center gap-2" style={{ color: restaurant.theme.text }}>
                  <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: restaurant.theme.primary }}></span>
                  {category.name}
                </h2>
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

      {/* Floating Cart Bottom Bar */}
      <div className="fixed bottom-5 left-4 right-4 z-50 max-w-md mx-auto">
        <div 
          className="rounded-2xl shadow-xl flex items-center justify-between px-5 py-3 cursor-pointer transition-transform active:scale-95 border"
          style={{ backgroundColor: restaurant.theme.accent, color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold opacity-90 tracking-wider">1 ITEM</span>
            <span className="font-bold text-[17px] leading-tight">₹1199</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[15px]">
            VIEW CART <ShoppingBag size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return restaurants.map((r) => ({
    restaurantSlug: r.slug,
  }));
}
