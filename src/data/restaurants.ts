import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    slug: 'banazo',
    name: 'Banazo',
    description: 'Avil Milks, Shakes & Juices',
    logo: '🍌', 
    theme: {
      primary: '#166534', // Dark Green
      secondary: '#fef08a', // Yellow 
      background: '#fde047', // Bright Yellow
      cardBg: '#ffffff',
      text: '#14532d', // Dark Green
      textMuted: '#15803d', // Medium Green
      accent: '#16a34a', // Accent Green
    },
    categories: [
      { id: 'c1', name: 'Fruit Salad' },
      { id: 'c2', name: 'Fruit Salad (No Ice Cream)' },
      { id: 'c3', name: 'Shakes' },
      { id: 'c4', name: 'Fresh Juices' },
    ],
    items: [
      {
        id: 'b1',
        name: 'Vanilla Fruit Salad',
        description: 'Colorful mixed fruit salad topped with vanilla ice cream.',
        price: 100,
        image: '/images/banazo_fruit_salad.jpg',
        categoryId: 'c1',
        isVeg: true,
        isBestseller: true,
      },
      {
        id: 'b2',
        name: 'Milkavo Special Fruits Mix',
        description: 'Our special mixed fruit salad loaded with flavors.',
        price: 130,
        categoryId: 'c1',
        isVeg: true,
      },
      {
        id: 'b3',
        name: 'Fresh Cut Fruits',
        description: 'Freshly cut seasonal fruits served without ice cream.',
        price: 120,
        categoryId: 'c2',
        isVeg: true,
      },
      {
        id: 'b4',
        name: 'Chocolate Shake',
        description: 'Thick and rich chocolate shake.',
        price: 80,
        image: '/images/banazo_chocolate_shake.jpg',
        categoryId: 'c3',
        isVeg: true,
        isBestseller: true,
      },
      {
        id: 'b5',
        name: 'Avocado Shake',
        description: 'Creamy and healthy avocado shake.',
        price: 80,
        categoryId: 'c3',
        isVeg: true,
      },
      {
        id: 'b6',
        name: 'Fresh Lime',
        description: 'Refreshing fresh lime juice with ice.',
        price: 20,
        image: '/images/banazo_fresh_lime.jpg',
        categoryId: 'c4',
        isVeg: true,
      }
    ]
  },
  {
    slug: 'grillax',
    name: 'The Grillax',
    description: 'Get it grilled',
    logo: '🔥',
    theme: {
      primary: '#f97316', // Bright Orange
      secondary: '#ea580c', // Darker Orange
      background: '#171717', // Neutral-900 (Black textured)
      cardBg: '#262626', // Neutral-800
      text: '#fafafa', // Neutral-50
      textMuted: '#a3a3a3', // Neutral-400
      accent: '#f97316', // Orange
    },
    categories: [
      { id: 'g1', name: 'Grand Platters' },
    ],
    items: [
      {
        id: 'g-i1',
        name: '4Pax Grand Platter',
        description: 'Includes Cornstick, Vealchops, Peri Peri Chunks, Shishtawood, Sheekh Beef, Peri Peri Chicken, Hummus, Breads, Rice, Dips and more.',
        price: 1199,
        image: '/images/grillax_grand_platter.jpg',
        categoryId: 'g1',
        isVeg: false,
        isBestseller: true,
      },
      {
        id: 'g-i2',
        name: '6Pax Grand Platter',
        description: 'Extensive platter for 6 featuring Paneer Tikka, Sheekh Chicken, Peri Peri Wings, Nawabi, along with breads, rice, and sides.',
        price: 1799,
        image: '/images/grillax_grand_platter.jpg',
        categoryId: 'g1',
        isVeg: false,
      },
      {
        id: 'g-i3',
        name: '8Pax Grand Platter',
        description: 'The ultimate feast for 8 people featuring our complete selection of grills, breads, rice, and signature dips.',
        price: 2399,
        image: '/images/grillax_grand_platter.jpg',
        categoryId: 'g1',
        isVeg: false,
      }
    ]
  },
  {
    slug: 'burger-inn',
    name: 'Burger Inn',
    description: 'Classic American Fast Food',
    logo: '🍔',
    theme: {
      primary: '#eab308', // Yellow-500
      secondary: '#ef4444', // Red-500
      background: '#fefce8', // Yellow-50
      cardBg: '#ffffff',
      text: '#171717', // Neutral-900
      textMuted: '#525252', // Neutral-500
      accent: '#dc2626', // Red-600
    },
    categories: [
      { id: 'bi1', name: 'Premium Burgers' },
      { id: 'bi2', name: 'Sides & Fries' },
    ],
    items: [
      {
        id: 'bi-i1',
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty, melted cheddar, lettuce, tomato on a sesame bun.',
        price: 299,
        image: '/images/burger_inn_cheeseburger.jpg',
        categoryId: 'bi1',
        isVeg: false,
        isBestseller: true,
      },
      {
        id: 'bi-i2',
        name: 'Crispy Chicken Burger',
        description: 'Fried chicken, lettuce, mayo, and cheese on a brioche bun.',
        price: 249,
        image: '/images/burger_inn_chicken_burger.jpg',
        categoryId: 'bi1',
        isVeg: false,
      },
      {
        id: 'bi-i3',
        name: 'Loaded Fries',
        description: 'French fries topped with melted cheese, bacon bits, and jalapenos.',
        price: 199,
        image: '/images/burger_inn_loaded_fries.jpg',
        categoryId: 'bi2',
        isVeg: false,
        isSpicy: true,
      }
    ]
  }
];
