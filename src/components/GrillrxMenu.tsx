'use client';

import { Restaurant, MenuItem, MenuCategory } from '../types';
import { Plus, Flame, Star, Coffee } from 'lucide-react';

export default function GrillrxMenu({ restaurant }: { restaurant: Restaurant }) {
  const getItems = (catId: string) => restaurant.items.filter(i => i.categoryId === catId);

  const grandPlatters = getItems('g1');
  const combos = getItems('g2');
  const bbq = getItems('g3');
  const grill = getItems('g4');
  const starters = getItems('g5');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-32 font-sans max-w-md mx-auto relative border-x border-gray-900">
      
      {/* Top Header */}
      <header className="px-4 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="h-8">
          <img src="/images/grillax_logo.png" alt="GrillRX Logo" className="h-full w-auto object-contain" />
        </div>

      </header>

      {/* Category Nav */}
      <div className="px-4 pb-2 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-800">
        {restaurant.categories.map((cat, idx) => (
          <button 
            key={cat.id}
            onClick={() => document.getElementById(`category-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            className={`whitespace-nowrap px-4 py-1.5 text-[11px] font-bold rounded-full transition-transform active:scale-95 ${idx === 0 ? 'bg-[#f97316] text-white shadow-[0_0_10px_rgba(249,115,22,0.3)]' : 'text-gray-400 hover:text-white border border-gray-800'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <div className="px-4 text-center mt-6 mb-8 flex flex-col items-center">

        <h1 className="text-3xl font-black mb-2 tracking-wide uppercase text-white/90" style={{ letterSpacing: '0.05em' }}>
          FIRE. FLAVOUR. <span className="text-[#f97316]">GRILLRX.</span>
        </h1>
        <p className="text-gray-400 font-medium text-[11px] leading-relaxed max-w-[280px]">
          Experience the true taste of charcoal grills. Served alongside the best authentic arabian food...
        </p>
        <button 
          onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-3 text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors active:scale-95"
        >
          READ MORE
        </button>
      </div>

      <div id="menu-start" className="space-y-12 scroll-mt-20">
        {/* Category 1: Grand Platters */}
        {grandPlatters.length > 0 && (
          <section id="category-g1" className="px-4 scroll-mt-24">
            {grandPlatters.map(item => (
              <div key={item.id} className="bg-[#121212] rounded-xl overflow-hidden border border-gray-800/50 shadow-lg">
                {item.image && (
                  <div className="relative h-[200px] w-full">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#f97316] text-white text-[9px] font-bold px-2 py-1 rounded tracking-wider uppercase shadow-md">
                      SIGNATURE DISH
                    </div>
                    <div className="absolute top-3 right-3 border border-[#f97316] text-[#f97316] bg-black/60 backdrop-blur-sm text-[9px] font-bold px-2 py-1 rounded tracking-wider uppercase">
                      4-5 PAX
                    </div>
                  </div>
                )}
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">{item.name}</h3>
                  <p className="text-[11px] text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="text-center mt-3 text-[10px] text-gray-500">
                    * The items are subject to availability
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Category 2: Combo & Meals */}
        {combos.length > 0 && (
          <section id="category-g2" className="px-4 scroll-mt-24">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#ea580c]/20 text-[#f97316] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-2">
                KING OF TASTE
              </div>
              <h2 className="text-2xl font-serif italic text-white/90">Enjoy a Lovely Meal!</h2>
              <p className="text-[10px] text-gray-400 mt-2">Carefully crafted combo meals perfect for a feast with your friends and family.</p>
            </div>
            
            <div className="space-y-6">
              {combos.map(item => (
                <div key={item.id} className="bg-[#121212] rounded-xl overflow-hidden shadow-lg border border-gray-800/30">
                  {item.image && (
                    <div className="relative h-[180px] w-full">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute bottom-3 right-3 bg-[#f97316] text-white text-lg font-black px-3 py-1 rounded-lg shadow-lg">
                        ₹{item.price}
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <h3 className="text-[15px] font-black text-white uppercase tracking-wide">{item.name}</h3>
                      {!item.image && (
                        <div className="bg-[#f97316] text-white font-black px-2 py-0.5 rounded shadow-lg text-[13px] whitespace-nowrap">
                          ₹{item.price}
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <span className="text-[#10b981] text-[10px] font-bold border border-[#10b981]/30 bg-[#10b981]/10 px-2 py-0.5 rounded flex items-center gap-1">
                          Must Try
                        </span>
                        <span className="text-blue-400 text-[10px] font-bold border border-blue-400/30 bg-blue-400/10 px-2 py-0.5 rounded">
                          Customisable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Banner */}
        <div className="px-4">
          <div className="bg-[#1e1e1e] border border-yellow-600/30 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-500">
              <Star size={16} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white uppercase tracking-wider">Try our Signature Dips</div>
              <div className="text-[9px] text-gray-400">Add extra dips for better experience.</div>
            </div>
          </div>
        </div>

        {/* Category 3: Hot Smokey BBQ */}
        {bbq.length > 0 && (
          <section id="category-g3" className="px-4 scroll-mt-24">
            <h2 className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest mb-1">Our Specials</h2>
            <h3 className="text-xl font-black text-white mb-4 uppercase">HOT SMOKEY BBQ</h3>
            
            <div className="space-y-4">
              {bbq.map(item => (
                <div key={item.id} className="bg-[#121212] p-4 rounded-xl border border-gray-800/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-[14px] uppercase tracking-wide">{item.name}</h4>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 max-w-[200px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Multiple price options display */}
                  <div className="flex gap-2 mt-4">
                    <div className="flex-1 border border-gray-800 text-gray-400 rounded-lg py-1.5 flex flex-col items-center justify-center">
                      <span className="text-[9px] uppercase tracking-wider">Half</span>
                      <span className="font-bold text-[13px]">₹199</span>
                    </div>
                    <div className="flex-1 border border-gray-800 text-gray-400 rounded-lg py-1.5 flex flex-col items-center justify-center">
                      <span className="text-[9px] uppercase tracking-wider">Quarter</span>
                      <span className="font-bold text-[13px]">₹120</span>
                    </div>
                    <div className="flex-1 border border-gray-800 text-gray-400 rounded-lg py-1.5 flex flex-col items-center justify-center">
                      <span className="text-[9px] uppercase tracking-wider">Full</span>
                      <span className="font-bold text-[13px]">₹350</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category 4: Straight From The Grill */}
        {grill.length > 0 && (
          <section id="category-g4" className="px-4 scroll-mt-24">
            <h2 className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest mb-1">Authentic Flavours</h2>
            <h3 className="text-xl font-black text-white mb-4 uppercase">STRAIGHT FROM THE GRILL</h3>

            <div className="space-y-4">
              {/* Highlight Item */}
              {grill[0] && (
                <div className="bg-[#121212] rounded-xl overflow-hidden border border-gray-800/50 relative">
                  {grill[0].image && (
                    <div className="h-[140px] w-full">
                      <img src={grill[0].image} alt={grill[0].name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[14px] uppercase tracking-wide">{grill[0].name}</h4>
                      <p className="text-[10px] text-gray-400 mt-1 max-w-[200px] line-clamp-2">{grill[0].description}</p>
                    </div>
                    <div className="text-[#f97316] font-black text-lg">
                      ₹{grill[0].price}
                    </div>
                  </div>
                </div>
              )}
              
              {/* List Items */}
              {grill.slice(1).map(item => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                  <div className="flex-1">
                    <h4 className="font-bold text-[13px] text-gray-200 uppercase tracking-wide">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <span className="font-bold text-[14px] text-[#f97316]">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Banner inside list */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] p-4 text-center shadow-lg shadow-orange-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20"><Flame size={40} /></div>
              <h4 className="text-white font-black text-[14px] uppercase tracking-widest mb-1 relative z-10">Authentic Flavours. Real Charcoal.</h4>
              <h4 className="text-white font-black text-[14px] uppercase tracking-widest mb-2 relative z-10">Limited Time Taste.</h4>
              <p className="text-white/90 text-[10px] font-medium relative z-10">Ask our staff for the chef's special recommendations and add-ons.</p>
            </div>
          </section>
        )}

        {/* Category 5: Starters & Dips */}
        {starters.length > 0 && (
          <section id="category-g5" className="px-4 pt-2 scroll-mt-24">
            <h3 className="text-xl font-black text-white mb-4 uppercase">STARTERS & DIPS</h3>
            <div className="space-y-4">
              {starters.map(item => (
                <div key={item.id} className="flex justify-between items-start py-2 border-b border-gray-800 last:border-0">
                  <div>
                    <h4 className="font-bold text-[13px] text-gray-300 uppercase tracking-wide">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">{item.description}</p>
                  </div>
                  <div className="font-bold text-[14px] text-[#f97316] whitespace-nowrap ml-4">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer Branding */}
      <div className="mt-12 px-4 pb-12 flex flex-col items-center justify-center opacity-40">
        <div className="text-[#f97316] font-bold text-2xl flex items-center gap-2 mb-2">
           GRILLRX
        </div>
        <p className="text-center text-[9px] max-w-[200px] mb-4">
          Experience the finest charcoal grills in town. Our meat is sourced locally and grilled to perfection.
        </p>
        <div className="flex gap-4 text-[9px] uppercase tracking-wider font-bold">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      
    </div>
  );
}
