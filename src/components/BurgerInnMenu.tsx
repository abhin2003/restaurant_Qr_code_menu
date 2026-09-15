'use client';

import { Restaurant } from '../types';
import { ChevronDown, Star, Leaf, Flame, Sparkles } from 'lucide-react';

export default function BurgerInnMenu({ restaurant }: { restaurant: Restaurant }) {
  const getItems = (catId: string) => restaurant.items.filter(i => i.categoryId === catId);

  const combos = getItems('bi1');
  const burgers = getItems('bi2');
  const sides = getItems('bi3');
  const drinks = getItems('bi4');

  const thickBorder = 'border-2 border-[#451a03] rounded-2xl shadow-[4px_4px_0px_0px_#eab308]';
  const smallBorder = 'border-2 border-[#451a03] rounded-xl shadow-[2px_2px_0px_0px_#eab308]';

  return (
    <div className="min-h-screen bg-[#fefce8] text-[#171717] pb-32 font-sans max-w-md mx-auto relative border-x border-[#451a03]/10">
      
      {/* Top Header */}
      <header className="px-4 py-3 flex justify-between items-center sticky top-0 z-50 bg-[#fefce8]/90 backdrop-blur-md border-b-2 border-[#451a03]">
        <div className="h-8 shadow-[2px_2px_0px_0px_#451a03] rounded-lg border-2 border-[#451a03] overflow-hidden flex items-center">
          {typeof restaurant.logo === 'string' ? (
            <img src={restaurant.logo} alt="Burger Inn Logo" className="h-full w-auto object-contain" />
          ) : (
            <div className="h-full">{restaurant.logo}</div>
          )}
        </div>
        <div className="flex gap-2">

          <button 
            onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#eab308] text-[#451a03] font-black text-[10px] px-3 py-1.5 rounded-full border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          >
            OFFERS
          </button>
        </div>
      </header>

      {/* Category Nav */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar border-b-2 border-[#451a03] bg-white">
        {restaurant.categories.map((cat, idx) => (
          <button 
            key={cat.id}
            onClick={() => document.getElementById(`category-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            className={`whitespace-nowrap px-4 py-1.5 text-[11px] font-black rounded-full transition-transform active:scale-95 border-2 border-[#451a03] ${idx === 0 ? 'bg-[#dc2626] text-white shadow-[2px_2px_0px_0px_#451a03]' : 'bg-white text-[#dc2626] hover:bg-gray-50'}`}
          >
            {cat.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <div className="px-4 mt-5 mb-6">
        <div className="flex items-center gap-2 mb-3">

          <div className="bg-[#16a34a] border-2 border-[#451a03] text-white px-3 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-[1px_1px_0px_0px_#451a03]">
            10% OFF ON ALL ORDERS
          </div>
        </div>
        <h1 className="text-4xl font-black mb-2 tracking-tight text-[#451a03] uppercase leading-none">
          BITE INTO<br/>HAPPINESS.
        </h1>
        <p className="text-[#451a03] font-bold text-[12px] leading-snug mb-5 max-w-[280px]">
          BIG BURGERS, BIG FLAVOUR. Quality ingredients combined for the perfect bite. Order now and experience the happiness.
        </p>

        {/* Featured Hero Card */}
        <div className={`bg-white p-3 mb-5 ${thickBorder} relative`}>
          <div className="absolute top-4 right-4 z-10 bg-[#dc2626] text-white font-black px-4 py-2 rounded-2xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] transform rotate-3">
            ₹1299<br/><span className="text-[10px]">COMBO</span>
          </div>
          <div className="h-[140px] bg-[#eab308] rounded-xl border-2 border-[#451a03] flex items-center justify-center p-4 text-center">
            <span className="font-black text-3xl text-[#451a03] uppercase leading-none">Burger<br/>of the<br/>Day</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button 
            onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex-1 bg-[#dc2626] text-white font-black text-[13px] py-3.5 rounded-2xl border-2 border-[#451a03] shadow-[3px_3px_0px_0px_#451a03] hover:-translate-y-1 active:translate-y-0 transition-transform`}
          >
            EXPLORE MENU
          </button>
          <button 
            onClick={() => document.getElementById('favourites')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex-1 bg-white text-[#451a03] font-black text-[13px] py-3.5 rounded-2xl border-2 border-[#451a03] shadow-[3px_3px_0px_0px_#451a03] flex items-center justify-center gap-2 hover:-translate-y-1 active:translate-y-0 transition-transform`}
          >
            FAVOURITES <Star size={14} />
          </button>
        </div>

        {/* Bundle Banner */}
        <div id="offers" className="bg-[#16a34a] border-2 border-[#451a03] rounded-2xl p-3 flex justify-between items-center shadow-[3px_3px_0px_0px_#451a03] scroll-mt-24 cursor-pointer hover:bg-[#15803d] transition-colors group">
          <div className="text-white font-black text-[13px] tracking-wide">ORDER A BUNDLE SET</div>
          <div className="bg-[#dc2626] border-2 border-[#451a03] text-white text-[9px] font-black px-2 py-1 rounded-full shadow-[2px_2px_0px_0px_#451a03] transform -rotate-2 group-hover:scale-110 transition-transform">
            SAVE UP TO 30%
          </div>
        </div>
      </div>

      <div id="menu-start" className="space-y-8 px-4 scroll-mt-16">
        
        {/* Category 1: Combos */}
        {combos.length > 0 && (
          <section id="category-bi1" className="scroll-mt-24">
            <div className="inline-block bg-[#16a34a] text-white px-4 py-1.5 rounded-full border-2 border-[#451a03] font-black text-[11px] mb-4 shadow-[2px_2px_0px_0px_#451a03] tracking-wider uppercase">
              COMBO & MEALS
            </div>
            
            {/* Main Combo */}
            {combos[0] && (
              <div className={`bg-white p-3.5 mb-4 ${thickBorder}`}>
                <div className="bg-[#16a34a] text-white font-black text-[9px] px-2 py-0.5 rounded border-2 border-[#451a03] inline-block mb-2 shadow-[1px_1px_0px_0px_#451a03]">
                  NEW COMBO
                </div>
                {combos[0].image && (
                  <div className="h-[160px] rounded-xl overflow-hidden border-2 border-[#451a03] mb-3 relative">
                    <img src={combos[0].image} alt={combos[0].name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-black text-[16px] text-[#451a03] uppercase leading-tight mb-1">{combos[0].name}</h3>
                    <p className="text-[11px] font-bold text-gray-600 line-clamp-2">{combos[0].description}</p>
                  </div>
                  <div className="bg-[#dc2626] text-white font-black text-[14px] px-3 py-1 rounded-xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] whitespace-nowrap">
                    ₹{combos[0].price}
                  </div>
                </div>
              </div>
            )}

            {/* Smaller Combos */}
            <div className="space-y-3">
              {combos.slice(1).map(item => (
                <div key={item.id} className={`bg-white p-3 flex justify-between items-center ${smallBorder}`}>
                  <div className="flex-1 pr-2">
                    <h4 className="font-black text-[14px] text-[#451a03] uppercase leading-tight mb-0.5">{item.name}</h4>
                    <p className="text-[10px] font-bold text-gray-600 line-clamp-1">{item.description}</p>
                  </div>
                  <div className="bg-[#eab308] text-[#451a03] font-black text-[13px] px-3 py-1 rounded-xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] whitespace-nowrap">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category 2: Burgers */}
        {burgers.length > 0 && (
          <section id="category-bi2" className="scroll-mt-24">
            <div className="bg-[#eab308] border-2 border-[#451a03] rounded-2xl p-4 mb-4 shadow-[4px_4px_0px_0px_#451a03]">
              <h2 className="text-[20px] font-black text-[#451a03] uppercase tracking-wide flex items-center justify-between">
                BURGER LINEUP 🍔
              </h2>
            </div>
            
            {/* Main Burger */}
            {burgers[0] && (
              <div className={`bg-white p-3.5 mb-4 ${thickBorder}`}>
                <div className="bg-[#eab308] text-[#451a03] font-black text-[9px] px-2 py-0.5 rounded border-2 border-[#451a03] inline-block mb-2 shadow-[1px_1px_0px_0px_#451a03]">
                  BEST SELLER 🔥
                </div>
                {burgers[0].image && (
                  <div className="h-[200px] rounded-xl overflow-hidden border-2 border-[#451a03] mb-3 relative bg-gray-100">
                    <img src={burgers[0].image} alt={burgers[0].name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                )}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-black text-[16px] text-[#451a03] uppercase leading-tight mb-1">{burgers[0].name}</h3>
                    <p className="text-[11px] font-bold text-gray-600 line-clamp-2">{burgers[0].description}</p>
                  </div>
                  <div className="bg-[#dc2626] text-white font-black text-[14px] px-3 py-1 rounded-xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] whitespace-nowrap">
                    ₹{burgers[0].price}
                  </div>
                </div>
              </div>
            )}

            {/* Grid Burgers */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {burgers.slice(1, 5).map((item, i) => (
                <div key={item.id} className={`bg-white p-3 flex flex-col h-full ${smallBorder}`}>
                  <div className={`${i % 2 === 0 ? 'bg-[#dc2626] text-white' : 'bg-[#16a34a] text-white'} font-black text-[8px] px-2 py-0.5 rounded border-2 border-[#451a03] self-start mb-2 shadow-[1px_1px_0px_0px_#451a03]`}>
                    RECOMMENDED
                  </div>
                  <h4 className="font-black text-[13px] text-[#451a03] uppercase leading-tight mb-1">{item.name}</h4>
                  <p className="text-[9px] font-bold text-gray-500 line-clamp-2 mb-3 flex-1">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-black text-[14px] text-[#dc2626]">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* List item */}
            {burgers[5] && (
              <div className="bg-white border-2 border-[#dc2626] rounded-xl p-3 flex justify-between items-center shadow-[3px_3px_0px_0px_#dc2626]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-10 bg-[#dc2626] w-full h-full"></div>
                <div>
                  <h4 className="font-black text-[14px] text-[#dc2626] uppercase">{burgers[5].name}</h4>
                  <p className="text-[10px] font-bold text-gray-600">Family pack with all varieties mixed in one box.</p>
                </div>
                <div className="font-black text-[15px] text-[#dc2626]">
                  ₹{burgers[5].price}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Banner Everyone Talks About */}
        <section id="favourites" className="scroll-mt-24">
          <div className="bg-[#451a03] rounded-3xl p-5 border-4 border-[#451a03] shadow-[6px_6px_0px_0px_#eab308] relative overflow-hidden text-center">
            <div className="bg-[#eab308] text-[#451a03] font-black text-[10px] px-3 py-1 rounded-full inline-block mb-3 border-2 border-[#451a03]">
              GOLDEN TICKET
            </div>
            <h2 className="text-[22px] font-black text-[#eab308] uppercase leading-tight mb-2">
              THE ONE EVERYONE<br/>TALKS ABOUT.
            </h2>
            <p className="text-[#fefce8]/80 font-bold text-[10px] mb-5">
              Experience the masterclass combination of juicy beef and melted cheese.
            </p>
            <div className="flex justify-center gap-3">
               <div className="flex flex-col items-center border border-[#eab308]/30 rounded-xl p-2 w-20">
                 <span className="text-[#eab308] font-black text-lg">2M</span>
                 <span className="text-white/60 text-[8px] font-bold">SOLD</span>
               </div>
               <div className="flex flex-col items-center border border-[#eab308]/30 rounded-xl p-2 w-20">
                 <span className="text-[#eab308] font-black text-lg">4.9</span>
                 <span className="text-white/60 text-[8px] font-bold">RATING</span>
               </div>
            </div>
          </div>
        </section>

        {/* Category 3: Sides */}
        {sides.length > 0 && (
          <section id="category-bi3" className="scroll-mt-24">
            <div className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full border-2 border-[#451a03] font-black text-[11px] mb-4 shadow-[2px_2px_0px_0px_#451a03] tracking-wider uppercase">
              FRIES BEFORE GUYS 🍟
            </div>
            
            {/* Main Side */}
            {sides[0] && (
              <div className={`bg-white p-3.5 mb-4 ${thickBorder}`}>
                <div className="bg-[#dc2626] text-white font-black text-[9px] px-2 py-0.5 rounded border-2 border-[#451a03] inline-block mb-2 shadow-[1px_1px_0px_0px_#451a03]">
                  SPICY HOT 🌶️
                </div>
                {sides[0].image && (
                  <div className="h-[180px] rounded-xl overflow-hidden border-2 border-[#451a03] mb-3 bg-[#eab308]/20">
                    <img src={sides[0].image} alt={sides[0].name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-black text-[16px] text-[#451a03] uppercase leading-tight mb-1">{sides[0].name}</h3>
                    <p className="text-[11px] font-bold text-gray-600 line-clamp-2">{sides[0].description}</p>
                  </div>
                  <div className="bg-[#eab308] text-[#451a03] font-black text-[14px] px-3 py-1 rounded-xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] whitespace-nowrap">
                    ₹{sides[0].price}
                  </div>
                </div>
              </div>
            )}

            {/* Side List */}
            <div className="space-y-3">
              {sides.slice(1).map(item => (
                <div key={item.id} className="bg-white px-3 py-2.5 rounded-xl border-2 border-[#451a03] shadow-[2px_2px_0px_0px_#451a03] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-[#451a03] bg-orange-100 flex items-center justify-center text-lg shadow-[1px_1px_0px_0px_#451a03]">
                      🍟
                    </div>
                    <div>
                      <h4 className="font-black text-[12px] text-[#451a03] uppercase">{item.name}</h4>
                      <p className="text-[9px] font-bold text-gray-500 line-clamp-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="font-black text-[13px] text-[#dc2626]">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category 4: Drinks */}
        {drinks.length > 0 && (
          <section id="category-bi4" className="scroll-mt-24">
            <div className="inline-block bg-[#16a34a] text-white px-4 py-1.5 rounded-full border-2 border-[#451a03] font-black text-[11px] mb-4 shadow-[2px_2px_0px_0px_#451a03] tracking-wider uppercase">
              WASH IT DOWN 🥤
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {drinks.map((item, i) => (
                <div key={item.id} className={`bg-white p-3 flex flex-col h-full ${smallBorder}`}>
                  <div className="w-6 h-6 rounded-md border-2 border-[#451a03] flex items-center justify-center mb-2 shadow-[1px_1px_0px_0px_#451a03]">
                    {i % 2 === 0 ? '🍋' : '🧊'}
                  </div>
                  <h4 className="font-black text-[12px] text-[#451a03] uppercase leading-tight mb-1">{item.name}</h4>
                  <p className="text-[9px] font-bold text-gray-500 line-clamp-2 mb-3 flex-1">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-black text-[13px] text-[#dc2626]">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Make It Extra Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[18px] font-black text-[#451a03] uppercase tracking-wide">
              MAKE IT EXTRA +
            </h2>
            <div className="flex-1 h-0.5 bg-[#451a03] opacity-20"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Extra Mayo ₹20', 'Extra Cheese ₹30', 'Extra Beef Patty ₹80', 'Extra Chicken Patty ₹60', 'Coffee After Meal ₹120'].map((extra, idx) => (
              <div key={idx} className="bg-white border-2 border-[#451a03] rounded-full px-3 py-1.5 font-black text-[10px] text-[#451a03] shadow-[2px_2px_0px_0px_#451a03] flex items-center gap-1 cursor-pointer hover:bg-yellow-50">
                <span className="text-[#dc2626]">+</span> {extra}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Ordering Guide */}
        <section className="bg-white border-[3px] border-dashed border-[#dc2626] rounded-3xl p-5 text-center mt-6">
          <div className="inline-block bg-[#dc2626] text-white font-black text-[9px] px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            🛎️ HOW TO ORDER AT YOUR TABLE
          </div>
          <div className="flex justify-center gap-4 text-[#451a03] font-black text-[9px] uppercase tracking-wide mb-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full border-2 border-[#451a03] bg-[#eab308] flex items-center justify-center text-sm shadow-[1px_1px_0px_0px_#451a03]">1</div>
              <span>Scan QR Code</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full border-2 border-[#451a03] bg-[#eab308] flex items-center justify-center text-sm shadow-[1px_1px_0px_0px_#451a03]">2</div>
              <span>Place Order</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full border-2 border-[#451a03] bg-[#eab308] flex items-center justify-center text-sm shadow-[1px_1px_0px_0px_#451a03]">3</div>
              <span>Enjoy Meal</span>
            </div>
          </div>
          <p className="text-[9px] font-bold text-gray-500">A service charge is not included. All prices are inclusive of taxes.</p>
        </section>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 px-4 pb-12 flex flex-col items-center justify-center opacity-70">
        <div className="text-[#451a03] font-black text-xl flex items-center gap-2 mb-1">
           BURGER INN
        </div>
        <div className="text-[#dc2626] font-black text-[10px] tracking-widest mb-4">
          BURGERS. FRIES. GOOD TIMES.
        </div>
        <div className="flex gap-3 text-[9px] uppercase tracking-wider font-bold text-[#451a03] mb-3">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms</a>
          <span>•</span>
          <a href="#">Contact Us</a>
        </div>
        <p className="text-center text-[8px] font-bold text-gray-500">
          © 2024 Burger Inn Corp. All rights reserved.<br/>"Bite into happiness" is a registered trademark.
        </p>
      </div>
      
    </div>
  );
}
