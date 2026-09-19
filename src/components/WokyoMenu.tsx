'use client';

import { Restaurant } from '../types';
import { Search, ShoppingBag, Menu, Star, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function WokyoMenu({ restaurant }: { restaurant: Restaurant }) {
  const [activeCategory, setActiveCategory] = useState(restaurant.categories[0].id);

  const getItems = (catId: string) => restaurant.items.filter(i => i.categoryId === catId);

  const straightFromWok = getItems('w1');
  const gyozaCraft = getItems('w2');
  const ramenSanctuary = getItems('w3');
  const sweetTooth = getItems('w4');
  const houseSips = getItems('w5');

  return (
    <div className="min-h-screen pb-10 font-sans max-w-md mx-auto relative border-x-[3px] border-black bg-[#d97736] text-black">
      
      {/* Top Header - Brutalist White Block */}
      <header className="flex justify-between items-center bg-white border-b-[3px] border-black sticky top-0 z-50 px-4 py-3 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <button className="p-1">
          <Menu size={24} strokeWidth={2.5} />
        </button>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-black text-2xl tracking-tighter leading-none">WOKYO</h1>
        </div>
        <div className="w-16" />
      </header>



      {/* Supper Club Hero */}
      <div className="p-4">
        <div className="border-[3px] border-black p-4 relative">
          <div className="absolute top-1 left-1 border-l-[3px] border-t-[3px] border-black w-4 h-4" />
          <div className="absolute top-1 right-1 border-r-[3px] border-t-[3px] border-black w-4 h-4" />
          <div className="absolute bottom-1 left-1 border-l-[3px] border-b-[3px] border-black w-4 h-4" />
          
          <div className="flex gap-4 items-start pt-2">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-black text-[10px] border-[2px] border-white shadow-[0_0_0_2px_#000]">
              WOKYO
            </div>
            <div>
              <div className="text-[10px] font-bold flex items-center gap-1 uppercase mb-0.5">
                <span className="w-1.5 h-1.5 bg-black" /> EXCLUSIVE PREVIEW
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">SUPPER<br/>CLUB</h2>
              <p className="text-[10px] font-semibold leading-snug max-w-[200px] mb-4">
                Al Maktoum, Mangolya Art - Shinjuku Street Sign
              </p>
              
              <div className="grid grid-cols-2 gap-x-2 text-[9px] font-bold uppercase border-y-[2px] border-black py-2 mb-3">
                <div className="flex flex-col gap-1">
                  <span>GYOZA</span>
                  <span>HO FUN</span>
                  <span>RAMEN</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span>CABBAGE / CHICK</span>
                  <span>BEEF / PORK SIGNAS</span>
                  <span>16 HR TONKOTSU</span>
                </div>
              </div>
              
              <div className="text-[9px] font-bold uppercase mb-1 text-gray-800">
                SERVED WITH STANDARD
              </div>
              <div className="text-[11px] font-black uppercase flex items-center justify-between">
                <span>PRAWN CRACKER CRUSH</span>
                <span className="text-xl leading-none">❀</span>
              </div>
            </div>
          </div>
          
          <div className="absolute left-2 top-16 text-3xl font-black opacity-30 tracking-widest pointer-events-none" style={{ writingMode: 'vertical-lr' }}>
            迎春
          </div>

        </div>
      </div>

      {/* Categories Nav */}
      <div className="px-4 pb-4 flex gap-2 overflow-x-auto no-scrollbar sticky top-[68px] z-40 bg-[#d97736]/95 backdrop-blur-sm border-b-[3px] border-black py-2 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <button className="whitespace-nowrap px-3 py-1 text-[10px] font-black uppercase border-[2.5px] border-black bg-black text-white shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
          ALL (32)
        </button>
        {restaurant.categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              document.getElementById(`category-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="whitespace-nowrap px-3 py-1 text-[10px] font-black uppercase border-[2.5px] border-black bg-white text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="pb-10">
        
        {/* WOK SECTION */}
        {straightFromWok.length > 0 && (
          <section id={`category-w1`} className="px-4 pt-6 scroll-mt-[120px]">
            <div className="flex justify-between items-end mb-4 border-b-[3px] border-black pb-2">
              <h3 className="text-xl font-black uppercase flex items-center gap-2 tracking-tight">
                <span className="w-2.5 h-2.5 bg-black block" />
                STRAIGHT FROM THE<br/>WOK
              </h3>
              <div className="text-[9px] font-bold uppercase text-right leading-tight">
                SORT /<br/>FILTER
              </div>
            </div>
            
            <div className="space-y-6">
              {straightFromWok.map(item => (
                <div key={item.id} className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                  {item.image && (
                    <div className="w-full h-48 border-b-[3px] border-black relative bg-black">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                      <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase border-[1.5px] border-white flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> CHEF'S PICK
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white text-black text-[9px] font-black px-2 py-1 uppercase border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                        48 Hrs Flash Deal
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-black uppercase tracking-tight max-w-[70%] leading-tight">{item.name}</h4>
                      <span className="font-black text-lg border-b-[2px] border-black leading-none pb-0.5">₹{item.price}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-700 leading-snug mb-4 border-l-[3px] border-[#d97736] pl-2">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      <span className="text-[9px] font-bold border-[1.5px] border-black px-1.5 py-0.5 uppercase">Vegan Protein</span>
                      <span className="text-[9px] font-bold border-[1.5px] border-black px-1.5 py-0.5 uppercase">Free-Range Egg</span>
                      <span className="text-[9px] font-bold border-[1.5px] border-black px-1.5 py-0.5 uppercase bg-[#d97736] text-white shadow-[1px_1px_0_0_#000]">Wok Hei Aroma</span>
                    </div>
                    

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GYOZA CRAFT */}
        {gyozaCraft.length > 0 && (
          <section id={`category-w2`} className="px-4 pt-10 scroll-mt-[120px]">
            <div className="flex justify-between items-end mb-4 border-b-[3px] border-black pb-2">
              <h3 className="text-xl font-black uppercase flex items-center gap-2 tracking-tight">
                <span className="w-2.5 h-2.5 bg-black block" />
                GYOZA CRAFT<br/>(HANETSUKI)
              </h3>
              <div className="text-[9px] font-bold uppercase text-right leading-tight">
                HAND<br/>FOLDED
              </div>
            </div>
            
            <div className="space-y-6">
              {gyozaCraft.map(item => (
                <div key={item.id} className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                  {item.image && (
                    <div className="w-full h-40 border-b-[3px] border-black relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-white text-black text-[14px] font-black px-3 py-1 uppercase border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                        ₹{item.price}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest border-[1px] border-white/30">
                        SIGNATURE PARTNER SAUCE
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="text-[17px] font-black uppercase tracking-tight leading-tight mb-2">{item.name}</h4>
                    <p className="text-[11px] font-semibold text-gray-600 leading-snug mb-4">
                      {item.description}
                    </p>
                    
                    <div className="border-[2.5px] border-black p-2 mb-4 bg-gray-50">
                      <div className="text-[9px] font-black uppercase mb-2 border-b-[1.5px] border-black pb-1 inline-block">SELECT FILLING:</div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="border-[2px] border-black bg-black text-white p-2 text-center flex flex-col items-center justify-center cursor-pointer">
                           <span className="text-[9px] font-bold leading-tight">TENDER<br/>CHICKEN</span>
                        </div>
                        <div className="border-[2px] border-black bg-white text-black p-2 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
                           <span className="text-[9px] font-bold leading-tight text-gray-500">WILD CABBAGE</span>
                        </div>
                        <div className="border-[2px] border-black bg-white text-black p-2 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
                           <span className="text-[9px] font-bold leading-tight text-gray-500">MATSUZE PORK</span>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RAMEN SANCTUARY - INVERTED THEME */}
        {ramenSanctuary.length > 0 && (
          <section id={`category-w3`} className="mt-10 scroll-mt-[120px] bg-[#111] text-white border-y-[3px] border-black py-8 px-4 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-end mb-6 border-b-[2px] border-gray-700 pb-3">
              <h3 className="text-2xl font-black uppercase flex items-center gap-3 tracking-tighter">
                <span className="text-[10px] border border-gray-500 px-1 py-0.5 tracking-widest text-gray-400">拉麺</span>
                RAMEN<br/>SANCTUARY
              </h3>
              <div className="text-[9px] font-bold uppercase text-right leading-tight text-gray-400">
                16 HR<br/>BROTH<br/>OAK<br/>TARE
              </div>
            </div>
            
            <p className="text-[11px] font-medium text-gray-300 mb-6 max-w-[250px]">
              Steamed in Tokyo, crafted here. 24 hours of slow cooking per 10 bowls.
            </p>
            
            <div className="space-y-8">
              {ramenSanctuary.map(item => (
                <div key={item.id} className="bg-transparent">
                  {item.image && (
                    <div className="w-full h-56 relative mb-4 border-[2px] border-gray-600 shadow-[4px_4px_0_0_rgba(100,100,100,0.2)]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover brightness-90" />
                      <div className="absolute top-2 left-2 text-white text-[8px] font-bold px-1.5 uppercase tracking-widest border-l-[2px] border-white">
                        THE ART OF NOODLES
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white text-black text-[14px] font-black px-3 py-1 uppercase shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                        ₹{item.price}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-black uppercase tracking-tight max-w-[70%] leading-none">{item.name}</h4>
                      <div className="text-[9px] text-right font-bold text-gray-400">Current<br/>Wait: 45m</div>
                    </div>
                    <p className="text-[11px] font-medium text-gray-400 leading-snug mb-5">
                      {item.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 border-y-[1px] border-gray-700 py-3 mb-5">
                      <div className="text-center border-r-[1px] border-gray-700">
                        <div className="text-[8px] text-gray-500 font-bold uppercase mb-0.5">SIMMER TIME</div>
                        <div className="text-[11px] font-black text-white">22 Hours</div>
                      </div>
                      <div className="text-center border-r-[1px] border-gray-700">
                        <div className="text-[8px] text-gray-500 font-bold uppercase mb-0.5">NOODLE FIRMNESS</div>
                        <div className="text-[11px] font-black text-white">Katame (Firm)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] text-gray-500 font-bold uppercase mb-0.5">AJITSUKE EGG</div>
                        <div className="text-[11px] font-black text-white">Toro (Runny)</div>
                      </div>
                    </div>
                    

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SWEET TOOTH */}
        {sweetTooth.length > 0 && (
          <section id={`category-w4`} className="px-4 pt-10 scroll-mt-[120px]">
            <div className="flex justify-between items-end mb-4 border-b-[3px] border-black pb-2">
              <h3 className="text-xl font-black uppercase flex items-center gap-2 tracking-tight">
                <span className="w-2.5 h-2.5 bg-black block" />
                SWEET TOOTH &<br/>FINISH
              </h3>
              <div className="text-[9px] font-bold uppercase text-right leading-tight">
                WARM<br/>CORNERS
              </div>
            </div>
            
            <div className="space-y-6">
              {sweetTooth.map(item => (
                <div key={item.id} className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                  {item.image && (
                    <div className="w-full h-40 border-b-[3px] border-black relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-white text-black text-[12px] font-black px-2.5 py-1 uppercase border-[3px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                        ₹{item.price}
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="text-[16px] font-black uppercase tracking-tight leading-none mb-2">{item.name}</h4>
                    <p className="text-[11px] font-semibold text-gray-700 leading-snug mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center border-t-[2px] border-black pt-3">
                       <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">4 WARM PIECES PER SERVE</span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SIPS */}
        {houseSips.length > 0 && (
          <section id={`category-w5`} className="px-4 pt-10 scroll-mt-[120px]">
            <div className="flex justify-between items-end mb-4 border-b-[3px] border-black pb-2">
              <h3 className="text-lg font-black uppercase flex items-center gap-2 tracking-tight">
                <span className="w-2.5 h-2.5 bg-black block" />
                HOUSE SIPS &<br/>SODA
              </h3>
              <div className="text-[9px] font-bold uppercase text-right leading-tight">
                COLD<br/>CARBONATED
              </div>
            </div>
            
            <div className="space-y-3">
              {houseSips.map(item => (
                <div key={item.id} className="bg-white border-[3px] border-black p-3 flex justify-between items-start shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <div className="pr-4">
                    <h4 className="text-[12px] font-black uppercase tracking-tight leading-none mb-1">{item.name}</h4>
                    <p className="text-[10px] font-semibold text-gray-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                     <span className="font-black text-[13px] leading-none mb-1">₹{item.price}</span>

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Allergy Footer */}
        <div className="px-4 mt-12 mb-8">
           <div className="bg-[#f0dec3] border-[3px] border-black p-4 text-center shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <div className="text-xl font-black mb-2 opacity-60">和協 麵麵</div>
              <p className="text-[10px] font-bold leading-relaxed mb-4">
                Wokyo Allergy Note: We handle sesame, shellfish, soy, and wheat on high heat iron woks. Kindly inform your server if you have severe dietary allergies.
              </p>
              <div className="text-[8px] font-black uppercase tracking-widest border-t-[2px] border-black pt-3 flex justify-center gap-4">
                 <span>HOURS: 12 PM - 11:30 PM</span>
                 <span>TABLE SELF-SERVICE</span>
              </div>
           </div>
        </div>

      </div>



    </div>
  );
}

function Plus({ size, strokeWidth }: { size: number, strokeWidth: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  );
}
