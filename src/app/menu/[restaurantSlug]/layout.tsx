import { ReactNode } from 'react';
import RestaurantTabs from '../../../components/RestaurantTabs';
import { restaurants } from '../../../data/restaurants';
import ThemeWrapper from '../../../components/ThemeWrapper';
import { notFound } from 'next/navigation';

export default async function MenuRestaurantLayout({ 
  children, 
  params 
}: { 
  children: ReactNode, 
  params: Promise<{ restaurantSlug: string }> 
}) {
  const { restaurantSlug } = await params;
  const restaurant = restaurants.find(r => r.slug === restaurantSlug);
  
  if (!restaurant) return notFound();

  return (
    <ThemeWrapper theme={restaurant.theme}>
      <div className="min-h-screen flex flex-col w-full">
        <div 
          className="sticky top-0 z-50 pt-2 px-2 overflow-hidden transition-colors duration-300"
          style={{ backgroundColor: restaurant.theme.background }}
        >
          <RestaurantTabs />
        </div>
        <div className="flex-1 relative">
          {children}
        </div>
      </div>
    </ThemeWrapper>
  );
}
