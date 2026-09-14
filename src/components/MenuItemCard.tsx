import { MenuItem, Theme } from '../types';
import { Plus } from 'lucide-react';

export default function MenuItemCard({ item, theme }: { item: MenuItem, theme: Theme }) {
  return (
    <div 
      className="flex flex-row p-3 rounded-2xl shadow-sm border transition-all hover:shadow-md"
      style={{ backgroundColor: theme.cardBg, borderColor: `${theme.primary}20` }}
    >
      <div className="flex-1 pr-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className={`w-[14px] h-[14px] border flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
              <div className={`w-[8px] h-[8px] rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
            </div>
            {item.isBestseller && (
              <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-sm bg-amber-100 text-amber-800">
                Bestseller
              </span>
            )}
            {item.isSpicy && (
              <span className="text-[12px]">🌶️</span>
            )}
          </div>
          <h3 className="font-bold text-[16px] mb-1.5 leading-snug">{item.name}</h3>
          <p className="text-[13px] line-clamp-2" style={{ color: theme.textMuted }}>{item.description}</p>
        </div>
        <div className="mt-3 font-semibold text-[15px]">
          ₹{item.price}
        </div>
      </div>
      
      <div className="w-[120px] h-[120px] relative flex-shrink-0">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover rounded-xl shadow-sm"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
        <button 
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 px-4 py-1.5 rounded-lg shadow-md font-bold text-sm transition-transform active:scale-95 border border-white"
          style={{ backgroundColor: theme.accent, color: '#fff' }}
        >
          ADD <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
