'use client';

import { Restaurant } from '../types';
import { Search, Plus, ShoppingBag } from 'lucide-react';

export default function BombayCafeMenu({ restaurant }: { restaurant: Restaurant }) {
  const getItems = (catId: string) => restaurant.items.filter(i => i.categoryId === catId);
  const getCategory = (catId: string) => restaurant.categories.find(c => c.id === catId);

  const categoriesToRender = [
    { cat: getCategory('bc1'), items: getItems('bc1'), type: 'cards' }, // Shakes & Juices
    { cat: getCategory('bc3'), items: getItems('bc3'), type: 'list_with_images' }, // Juices
    { cat: getCategory('bc4'), items: getItems('bc4'), type: 'list_no_images' }, // Chai & Snacks
    { cat: getCategory('bc2'), items: getItems('bc2'), type: 'list_no_images' }, // Our Special Chai
    { cat: getCategory('bc5'), items: getItems('bc5'), type: 'list_no_images' }, // Chaat & Snacks
    { cat: getCategory('bc6'), items: getItems('bc6'), type: 'list_no_images' }, // South Indian
    { cat: getCategory('bc7'), items: getItems('bc7'), type: 'list_with_hero' }, // Meals/Thali
    { cat: getCategory('bc8'), items: getItems('bc8'), type: 'text_grid' }, // Fresh Bakery
    { cat: getCategory('bc9'), items: getItems('bc9'), type: 'list_no_images' }, // Ice Cream/Desserts
  ].filter(section => section.cat && section.items.length > 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-32 font-sans max-w-md mx-auto relative shadow-sm border-x border-gray-100">
      
      {/* Top Header */}
      <header className="px-4 py-3 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={restaurant.logo as string} alt="Bombay Cafe Logo" className="h-10 w-10 object-contain rounded-full border border-gray-200" />
          <div className="flex flex-col">
            <span className="font-bold text-[14px] text-gray-900 leading-tight tracking-wide">BOMBAY CAFE</span>
            <span className="text-[10px] text-gray-500 font-medium">Andheri, Mumbai - 400053</span>
          </div>
        </div>
      </header>

      {/* Main Title Section */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Cafe's Fav Shakes&Juices</h1>
          <span className="text-[10px] text-[#dc2626] font-bold border border-[#dc2626] px-2 py-0.5 rounded-full">View Menu</span>
        </div>
        <p className="text-[11px] text-gray-500 mb-4">Our famous shakes & juices</p>

      </div>

      {/* Category Nav Pill Menu */}
      <div className="px-3 pb-3 flex gap-2 overflow-x-auto no-scrollbar bg-white sticky top-[64px] z-40">
        <button className="whitespace-nowrap px-4 py-1.5 text-[11px] font-bold rounded-full bg-[#dc2626] text-white transition-colors">
          All Menu
        </button>
        {restaurant.categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => document.getElementById(`category-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="whitespace-nowrap px-4 py-1.5 text-[11px] font-bold rounded-full bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-colors"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Veg Toggle */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100">
        <div className="w-8 h-4 bg-gray-200 rounded-full relative flex items-center cursor-pointer">
           <div className="w-3.5 h-3.5 bg-white rounded-full absolute left-[2px] shadow-sm"></div>
        </div>
        <div className="flex items-center gap-1.5">
           <div className="w-3 h-3 border border-green-600 rounded-sm flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
           </div>
           <span className="text-[11px] font-bold text-gray-700">Veg Only</span>
        </div>
      </div>

      <div className="mt-4 pb-24">
        {categoriesToRender.map((section, idx) => (
          <section key={section.cat!.id} id={`category-${section.cat!.id}`} className="px-4 pt-6 scroll-mt-[160px]">
            
            {section.type === 'cards' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔥</span>
                    <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">Trending Cafe's Fav & Shakes</h2>
                  </div>
                  <span className="text-[10px] text-[#dc2626] font-bold">View All &gt;</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {section.items.map(item => (
                    <div key={item.id} className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
                      <div className="w-full h-28 relative">
                        {item.image ? (
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                           <div className="w-full h-full bg-gray-100" />
                        )}
                        <div className="absolute top-2 left-2 bg-[#dc2626] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Must Try
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className={`w-3 h-3 border rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        <h3 className="font-bold text-[13px] text-gray-900 leading-tight mb-1 line-clamp-1">{item.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-bold text-[13px] text-gray-900">₹{item.price}</span>
                          <span className="text-gray-400 line-through text-[11px]">₹{item.price + 30}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-6 border-b border-gray-100 mb-2"></div>
              </>
            )}

            {section.type === 'list_with_images' && (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">{section.cat!.name}</h2>
                  <span className="text-gray-400 text-xs">({section.items.length} items)</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {section.items.map(item => (
                    <div key={item.id} className="flex justify-between gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-3 h-3 border rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                           <h3 className="font-bold text-[14px] text-gray-900 leading-tight">{item.name}</h3>
                           <span className="bg-[#dc2626]/10 text-[#dc2626] text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Must Try</span>
                        </div>
                        <span className="font-bold text-[13px] text-gray-900 block mb-1.5">₹{item.price}</span>
                        {item.description && (
                          <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="relative flex flex-col items-center">
                        {item.image ? (
                          <div className="w-[110px] h-[110px] rounded-2xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-[110px] h-1" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {section.type === 'list_no_images' && (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">{section.cat!.name}</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {section.items.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-3 h-3 border rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        <h3 className="font-bold text-[14px] text-gray-900 leading-tight mb-1">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed max-w-[85%]">{item.description}</p>
                        )}
                      </div>
                      <div className="font-bold text-[14px] text-[#dc2626] mt-5">
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {section.type === 'list_with_hero' && (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">{section.cat!.name}</h2>
                </div>
                <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 relative shadow-sm">
                   <img src={section.items[0]?.image || '/images/bombay_cafe_puffs.jpg'} alt={section.items[0]?.name || "Hero"} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                     <h3 className="text-white font-bold text-xl">{section.items[0]?.name}</h3>
                     <span className="text-white font-medium text-sm">₹{section.items[0]?.price}</span>
                   </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {section.items.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-3 h-3 border rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        <h3 className="font-bold text-[14px] text-gray-900 leading-tight mb-1">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed max-w-[85%]">{item.description}</p>
                        )}
                      </div>
                      <div className="font-bold text-[14px] text-[#dc2626] mt-5">
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {section.type === 'text_grid' && (
              <>
                <div className="mb-4">
                  <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">{section.cat!.name}</h2>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">fresh from the oven, straight to your plate</p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {section.items.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className={`w-2.5 h-2.5 border rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1 h-1 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        <h3 className="font-bold text-[12px] text-gray-900 leading-tight mb-0.5">{item.name}</h3>
                        <span className="text-[10px] text-gray-400 line-clamp-1">{item.description}</span>
                      </div>
                      <span className="font-bold text-[12px] text-[#dc2626] mt-4">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            
          </section>
        ))}
      </div>

      {/* Floating Cart Banner */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[400px] px-4 z-50">
         <div className="bg-[#dc2626] text-white rounded-xl shadow-xl px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-red-700 transition-colors">
            <div className="flex flex-col">
               <span className="font-bold text-[12px]">1 item(s) added</span>
               <span className="font-bold text-[14px]">₹120</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-[13px]">
               View Cart <ChevronRightIcon />
            </div>
         </div>
      </div>

      {/* Footer Branding */}
      <div className="px-4 pb-16 pt-8 flex flex-col items-center justify-center bg-gray-50 border-t border-gray-100 mt-8">
        <div className="text-[#dc2626] font-bold text-lg flex items-center gap-2 mb-2">
           <img src={restaurant.logo as string} alt="Bombay Cafe Logo" className="h-6 w-auto object-contain rounded-full" />
           Bombay Cafe
        </div>
        <p className="text-center text-[10px] max-w-[250px] text-gray-500 mb-4">
          A Cafe Experience by the finest chefs in Mumbai. Try our special dishes & authentic taste.
        </p>
        <div className="text-[9px] text-[#dc2626] border border-[#dc2626] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
          100% Pure Veg & Non-Veg
        </div>
      </div>

    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

