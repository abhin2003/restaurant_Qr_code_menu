'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { restaurants } from '../data/restaurants';
import { motion } from 'framer-motion';

export default function RestaurantTabs() {
  const pathname = usePathname();

  return (
    <div className="flex w-full overflow-x-auto no-scrollbar items-end gap-1.5 px-2">
      {restaurants.map((rest) => {
        const isActive = pathname === `/menu/${rest.slug}`;
        
        return (
          <Link
            key={rest.slug}
            href={`/menu/${rest.slug}`}
            className="relative flex items-center justify-center min-w-[110px] px-4 py-3 rounded-t-2xl text-sm font-semibold whitespace-nowrap transition-colors flex-shrink-0"
            style={{
              color: isActive ? rest.theme.primary : 'var(--text-muted)',
              zIndex: isActive ? 20 : 10,
            }}
          >
            {!isActive && (
              <div className="absolute inset-0 rounded-t-2xl opacity-10" style={{ backgroundColor: 'var(--text)' }} />
            )}
            
            {isActive && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 rounded-t-2xl"
                style={{ backgroundColor: rest.theme.background }}
                transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
              />
            )}
            
            <span className="relative z-20 flex items-center gap-2">
              <span className="text-lg">{rest.logo}</span>
              <span>{rest.name}</span>
              {isActive && (
                 <motion.span 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-green-500 ml-1"
                 >
                   ✓
                 </motion.span>
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
