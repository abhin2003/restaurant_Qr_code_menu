import { MenuItem, Theme } from '../types';

export default function MenuItemCard({ item, theme }: { item: MenuItem, theme: Theme }) {
  const isVertical = item.cardStyle === 'vertical' || item.isBestseller;

  const vegIcon = (
    <div className={`w-[14px] h-[14px] border flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
      <div className={`w-[8px] h-[8px] rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
    </div>
  );

  const bestSellerTag = item.isBestseller && (
    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 shadow-sm border border-amber-200">
      Bestseller
    </span>
  );

  if (isVertical) {
    return (
      <div 
        className="flex flex-col p-3 rounded-2xl shadow-sm border transition-all hover:shadow-md overflow-hidden relative"
        style={{ backgroundColor: theme.cardBg, borderColor: `${theme.primary}30` }}
      >
        <div className="w-full h-[180px] rounded-xl overflow-hidden mb-3 relative">
          {item.image ? (
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">No Image</div>
          )}
          {/* Overlay Tags */}
          <div className="absolute top-2 left-2 flex gap-2">
             {bestSellerTag}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-1">
            {vegIcon}
            {item.isSpicy && <span className="text-[12px]">🌶️</span>}
          </div>
          <h3 className="font-bold text-[18px] mb-1.5 leading-snug">{item.name}</h3>
          <p className="text-[13px] line-clamp-2 mb-3" style={{ color: theme.textMuted }}>{item.description}</p>
          <div className="flex items-center justify-between mt-auto pt-2 border-t" style={{ borderColor: `${theme.primary}15` }}>
            <div className="font-bold text-[16px]">₹{item.price}</div>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal layout
  return (
    <div 
      className="flex flex-row p-3 rounded-2xl shadow-sm border transition-all hover:shadow-md"
      style={{ backgroundColor: theme.cardBg, borderColor: `${theme.primary}30` }}
    >
      <div className="flex-1 pr-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            {vegIcon}
            {bestSellerTag}
            {item.isSpicy && <span className="text-[12px]">🌶️</span>}
          </div>
          <h3 className="font-bold text-[16px] mb-1.5 leading-snug">{item.name}</h3>
          <p className="text-[13px] line-clamp-2" style={{ color: theme.textMuted }}>{item.description}</p>
        </div>
        <div className="mt-3 font-bold text-[15px]">
          ₹{item.price}
        </div>
      </div>
      
      <div className="w-[130px] h-[130px] relative flex-shrink-0">
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
      </div>
    </div>
  );
}
