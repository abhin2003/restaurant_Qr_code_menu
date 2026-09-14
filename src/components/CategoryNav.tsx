'use client';

import { MenuCategory } from '../types';

export default function CategoryNav({ categories, activeColor }: { categories: MenuCategory[], activeColor: string }) {
  return (
    <div className="flex w-full overflow-x-auto no-scrollbar gap-2.5 items-center">
      {categories.map((category, index) => {
        const isActive = index === 0; // First item active by default for demonstration
        return (
          <a
            key={category.id}
            href={`#category-${category.id}`}
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors border"
            style={{
              backgroundColor: isActive ? activeColor : 'transparent',
              color: isActive ? '#fff' : 'inherit',
              borderColor: isActive ? activeColor : '#d1d5db'
            }}
          >
            {category.name}
          </a>
        );
      })}
    </div>
  );
}
