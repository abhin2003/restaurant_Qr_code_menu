'use client';

import { MenuCategory } from '../types';

export default function CategoryNav({ categories, activeColor }: { categories: MenuCategory[], activeColor: string }) {
  return (
    <div className="flex w-full overflow-x-auto no-scrollbar gap-2.5 items-center py-1">
      {categories.map((category, index) => {
        const isActive = index === 0; // First item active by default for demonstration
        return (
          <a
            key={category.id}
            href={`#category-${category.id}`}
            className="px-5 py-2 rounded-full text-[13px] font-black tracking-wide whitespace-nowrap transition-all border shadow-sm flex items-center justify-center"
            style={{
              backgroundColor: isActive ? activeColor : 'var(--color-theme-card, transparent)',
              color: isActive ? '#fff' : 'inherit',
              borderColor: isActive ? activeColor : 'rgba(128,128,128,0.2)'
            }}
          >
            {category.name}
          </a>
        );
      })}
    </div>
  );
}
