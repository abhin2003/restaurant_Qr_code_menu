'use client';

import { Restaurant } from '../types';
import { ChevronDown, Star } from 'lucide-react';

export default function BanazoMenu({ restaurant }: { restaurant: Restaurant }) {
  const brutalistShadow = 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]';
  const brutalistBorder = 'border-2 border-black rounded-xl';

  const favourites = restaurant.items.filter(item => item.isBestseller);
  const otherCategories = restaurant.categories.filter(cat => restaurant.items.some(i => i.categoryId === cat.id && !i.isBestseller));

  return (
    <div className="min-h-screen bg-[#fde047] pb-32 font-sans max-w-md mx-auto border-x border-black/10">
      
      {/* Top Header */}
      <header className="px-4 pt-4 pb-2 flex justify-between items-center">
        <div className="border-2 border-black rounded-lg w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <img src="/images/banazo_logo.png" alt="Banazo Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-[#ef4444] text-white font-black text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1 border-2 border-black ${brutalistShadow} hover:-translate-y-0.5 active:translate-y-0 transition-transform`}
          >
            BROWSE <ChevronDown size={12} strokeWidth={4} />
          </button>
          <button 
            onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-[#16a34a] text-white font-black text-[11px] px-3 py-1.5 rounded-full border-2 border-black ${brutalistShadow} hover:-translate-y-0.5 active:translate-y-0 transition-transform`}
          >
            OFFERS
          </button>
        </div>
      </header>


      {/* Hero Section */}
      <div className="px-4 text-center mb-6">

        
        <h1 className="text-[40px] font-black mb-3 leading-none tracking-tight text-black" style={{ textShadow: '1px 1px 0 #fff' }}>
          WHAT'S<br/>CRACKIN?
        </h1>
        <p className="text-black font-bold text-[12px] leading-snug px-4">
          Taste True Perfect Avil Milks, Shakes And Drinks From Banazo, Try To Believe Our Taste...
        </p>
      </div>

      {/* Reward Banner */}
      <div id="offers" className="px-4 mb-5 scroll-mt-20">
        <div className={`bg-white p-3 flex items-center justify-between ${brutalistBorder} ${brutalistShadow} relative overflow-hidden group cursor-pointer hover:bg-yellow-50 transition-colors`}>
          <div className="flex flex-col text-left z-10">
            <span className="bg-white border-2 border-black rounded-md px-2 py-0.5 text-[10px] font-black inline-block mb-1 w-max">
              YOU'VE EARNED
            </span>
            <span className="bg-white border-2 border-black rounded-md px-2 py-0.5 text-[10px] font-black inline-block w-max text-red-600">
              FREE REWARDS 🎉
            </span>
          </div>
          <div className="w-16 h-12 bg-gray-200 border-2 border-black rounded z-10">
            <img src="https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=100&h=80&fit=crop" className="w-full h-full object-cover rounded-sm" alt="Reward" />
          </div>
          {/* Dashed line effect at bottom */}
          <div className="absolute bottom-1 left-2 right-2 border-b-2 border-dashed border-red-400 opacity-50"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 flex gap-3 mb-8">
        <button 
          onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
          className={`flex-1 bg-[#14532d] text-white font-black text-[12px] py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 transition-transform`}
        >
          EXPLORE MENU &gt;
        </button>
        <button 
          onClick={() => document.getElementById('favourites')?.scrollIntoView({ behavior: 'smooth' })}
          className={`flex-1 bg-white text-black font-black text-[12px] py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 transition-transform`}
        >
          FAVOURITES &gt;
        </button>
      </div>

      {/* Category Nav */}
      <div className="sticky top-0 z-40 bg-[#fde047] py-3 border-b-2 border-black shadow-sm px-4 flex gap-2 overflow-x-auto no-scrollbar">
        {restaurant.categories.map((cat, idx) => (
          <button 
            key={cat.id}
            onClick={() => document.getElementById(`category-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            className={`whitespace-nowrap px-4 py-1.5 font-black text-[12px] rounded-full border-2 border-black hover:scale-105 active:scale-95 transition-transform ${idx === 0 ? 'bg-[#14532d] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-white text-black'}`}
          >
            {cat.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Banazo Favourites Section */}
      {favourites.length > 0 && (
        <div id="favourites" className="bg-[#14532d] pt-6 pb-8 px-4 border-b-2 border-black scroll-mt-20">
          <div className="inline-block bg-[#10b981] text-white font-black text-[10px] px-3 py-1 rounded-full mb-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tracking-wide">
            WE STRONGLY RECOMMEND
          </div>
          <h2 className="text-white text-[22px] font-black mb-1 flex items-center gap-2 tracking-tight">
            BANAZO FAVOURITES <span className="text-yellow-400"><Star fill="currentColor" size={20} /></span>
          </h2>
          <p className="text-green-200 text-[11px] font-bold mb-5">
            The only shakes you need to have for a magical ordinary moment.
          </p>

          <div className="space-y-4">
            {favourites.map((item, index) => (
              <div key={item.id} className={`bg-white p-3.5 relative ${brutalistBorder} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3.5 h-3.5 border-2 border-black flex items-center justify-center rounded-sm`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      </div>
                      <span className="bg-red-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded border border-black flex items-center gap-1">
                        🔥 MUST TRY
                      </span>
                    </div>
                    <h3 className="font-black text-[15px] leading-tight mb-1 pr-12">{item.name.toUpperCase()}</h3>
                    <p className="text-[11px] text-gray-700 font-bold leading-snug line-clamp-2 pr-12 mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Price Pill Floating Top Right */}
                <div className="absolute top-3 right-3 bg-[#fde047] text-black font-black text-[13px] px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ₹{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Menu Section */}
      <div id="menu-start" className="px-4 pt-6 scroll-mt-16">
        <div className="inline-block bg-[#16a34a] text-white font-black text-[10px] px-3 py-1 rounded-full mb-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tracking-wide">
          DON'T MISS OUT ON BANAZO
        </div>
        <h2 className="text-black text-[24px] font-black mb-1 tracking-tight">OUR TASTY MENU</h2>
        <p className="text-black font-bold text-[11px] mb-6">
          The Menu is full of healthy items... So do not wait order now.
        </p>

        <div className="space-y-8">
          {otherCategories.map(cat => {
            const items = restaurant.items.filter(i => i.categoryId === cat.id && !i.isBestseller);
            if (items.length === 0) return null;

            return (
              <div key={cat.id} id={`category-${cat.id}`} className="scroll-mt-24">
                <h3 className="bg-white inline-block px-3 py-1 font-black text-sm mb-3 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🍹 {cat.name.toUpperCase()}
                </h3>
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={item.id} className={`bg-white p-3.5 relative ${brutalistBorder} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3.5 h-3.5 border-2 border-black flex items-center justify-center rounded-sm`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>
                          </div>
                          <h4 className="font-black text-[14px] leading-tight mb-1 pr-14">{item.name.toUpperCase()}</h4>
                          <p className="text-[11px] text-gray-700 font-bold leading-snug line-clamp-2 pr-14">
                            {item.description}
                          </p>
                          <div className="mt-2">
                            <span className="text-[#16a34a] font-black text-[10px] underline cursor-pointer">View More</span>
                          </div>
                        </div>
                      </div>
                      {/* Price Pill Floating Top Right */}
                      <div className="absolute top-3 right-3 bg-[#fde047] text-black font-black text-[13px] px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:scale-95 transition-transform">
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer / Coolers */}
      <div className="px-4 mt-8 pb-10">
        <div className={`bg-white p-4 text-center ${brutalistBorder} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
          <div className="inline-block bg-[#fde047] font-black text-black px-4 py-1 border-2 border-black mb-3 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            BANAZO
          </div>
          <h3 className="font-black text-lg mb-1">COME HUNGRY, LEAVE HAPPY.</h3>
          <p className="text-[10px] font-bold mb-3">Available for dine-in, delivery, and takeout</p>
        </div>
      </div>

    </div>
  );
}
