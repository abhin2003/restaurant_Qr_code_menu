import Link from 'next/link';
import { restaurants } from '../data/restaurants';
import { ChevronRight } from 'lucide-react';

const cardBackgrounds: Record<string, { url: string, position: string }> = {
  'banazo': { url: '/images/banazo_avil.png', position: 'center top' },
  'grillax': { url: '/images/grillax_alpham.png', position: 'center center' },
  'burger-inn': { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', position: 'center center' }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center pt-16 pb-12 px-5">
      {/* Header Section */}
      <div className="text-center mb-12 relative z-10 w-full max-w-md">
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5 shadow-xl">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">Scan &bull; Select &bull; Order</span>
        </div>
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 tracking-tight">
          Choose Your<br/>Experience
        </h1>
        <p className="text-gray-400 text-sm font-medium">
          Select a restaurant to view their interactive menu and start ordering.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-md flex flex-col gap-6 relative z-10">
        {restaurants.map((rest) => (
          <Link href={`/menu/${rest.slug}`} key={rest.slug} className="block group cursor-pointer outline-none">
            <div
              className="relative h-48 rounded-3xl overflow-hidden transition-all duration-300 transform active:scale-95 group-hover:scale-[1.02] border border-white/10 shadow-2xl"
            >
              {/* Background Image with Parallax effect on hover */}
              <div 
                className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${cardBackgrounds[rest.slug]?.url || ''})`,
                  backgroundPosition: cardBackgrounds[rest.slug]?.position || 'center'
                }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: rest.theme.primary }} />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Top: Logo */}
                <div className="flex justify-between items-start">
                  <div className="h-12 w-auto max-w-[200px] flex items-center justify-start transform transition-transform duration-300 group-hover:-rotate-3">
                    {typeof rest.logo === 'string' ? (
                      <img src={rest.logo} alt={`${rest.name} Logo`} className="h-full w-auto object-contain rounded-xl drop-shadow-md" />
                    ) : (
                      <div className="h-full w-full">{rest.logo}</div>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Bottom: Info */}
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h2 className="text-2xl font-black text-white mb-1 tracking-wide">{rest.name}</h2>
                  <p className="text-xs font-medium text-gray-300 uppercase tracking-widest">{rest.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Decorative Blur Blobs */}
      <div className="fixed top-20 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
    </main>
  );
}
