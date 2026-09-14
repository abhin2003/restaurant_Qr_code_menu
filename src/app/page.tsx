import Link from 'next/link';
import { restaurants } from '../data/restaurants';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Choose Your Restaurant</h1>
        <p className="text-gray-500">Scan. Select. Order.</p>
      </div>

      <div className="w-full max-w-md space-y-6">
        {restaurants.map((rest) => (
          <Link href={`/menu/${rest.slug}`} key={rest.slug} className="block group">
            <div
              className="rounded-3xl shadow-sm overflow-hidden transition-all duration-300 transform active:scale-95 group-hover:shadow-md border border-gray-200"
              style={{ backgroundColor: rest.theme.cardBg, color: rest.theme.text }}
            >
              <div
                className="h-28 w-full flex items-center justify-center text-5xl"
                style={{ backgroundColor: rest.theme.primary, color: '#fff' }}
              >
                {rest.logo}
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-2xl font-bold mb-1">{rest.name}</h2>
                <p className="text-sm mb-4" style={{ color: rest.theme.textMuted }}>{rest.description}</p>
                <div
                  className="self-end px-6 py-2.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
                  style={{ backgroundColor: rest.theme.primary, color: '#fff' }}
                >
                  View Menu
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
