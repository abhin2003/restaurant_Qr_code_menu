import React from 'react';
import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    name: 'Banazo',
    slug: 'banazo',
    description: 'Avil Milks, Shakes & Juices',
    logo: '/images/banazo_logo.png',
    theme: {
      primary: '#166534', // Dark Green
      secondary: '#fef08a', // Yellow 
      background: '#fde047', // Bright Yellow
      cardBg: '#ffffff',
      text: '#14532d', // Dark Green
      textMuted: '#15803d', // Medium Green
      accent: '#16a34a', // Accent Green
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=600&auto=format&fit=crop', // Bananas/Smoothie placeholder
      title: "WHAT'S CRACKIN'",
      subtitle: "Taste True Perfect Avil Milks, Shakes And Drinks From Banazo, Try To Believe Our Taste...",
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
        categoryId: 'c4',
        isVeg: true,
      }
    ]
  },
  {
    name: 'The Grillax',
    slug: 'grillax',
    description: 'Get it grilled',
    logo: '/images/grillax_logo.png',
    theme: {
      primary: '#f97316', // Bright Orange
      secondary: '#ea580c', // Darker Orange
      background: '#171717', // Neutral-900 (Black textured)
      cardBg: '#262626', // Neutral-800
      text: '#fafafa', // Neutral-50
      textMuted: '#a3a3a3', // Neutral-400
      accent: '#f97316', // Orange
    },
    hero: {
      image: '/images/grillax_alpham.png', // Grill placeholder
      title: "FIRE. FLAVOUR. GRILLRX.",
      subtitle: "Experience the true taste of charcoal grills.",
    },
    categories: [
      { id: 'g1', name: 'Grand Platters' },
      { id: 'g2', name: 'Combo & Meals' },
      { id: 'g3', name: 'Hot Smokey BBQ' },
      { id: 'g4', name: 'Straight From The Grill' },
      { id: 'g5', name: 'Starters & Dips' },
    ],
    items: [
      {
        id: 'g-i1',
        name: '4PAX GRAND PLATTER',
        description: 'Includes Cornstick, Vealchops, Peri Peri Chunks, Shishtawood, Sheekh Beef, Peri Peri Chicken, Hummus, Breads, Rice, Dips and more.',
        price: 1199,
        image: '/images/grillax_alpham.png',
        categoryId: 'g1',
        isVeg: false,
        isBestseller: true,
      },
      {
        id: 'g-i2',
        name: 'SAFFRON MANDI COMBO BEEF',
        description: 'Try the traditional Saffron mandi with the spicy grilled and roasted beef. Giving out a distinct flavour of its own. Best tried with friends.',
        price: 890,
        categoryId: 'g2',
        isVeg: false,
        isBestseller: true,
        image: '/images/mandi_beef.jpg',
      },
      {
        id: 'g-i3',
        name: 'SAFFRON MANDI COMBO CHICKEN',
        description: 'The perfectly blended saffron mandi with juicy grilled chicken along with salads, dips and a very spicy chilly sauce to mix with the mandi.',
        price: 690,
        categoryId: 'g2',
        isVeg: false,
        image: '/images/mandi_chicken.jpg',
      },
      {
        id: 'g-i4',
        name: '1/2 GRILLED CHICKEN',
        description: 'Delicious smokey flavour on the skin, perfectly tender on the inside.',
        price: 199,
        categoryId: 'g3',
        isVeg: false,
      },
      {
        id: 'g-i5',
        name: 'NAWABI KHAZANA PERI PERI',
        description: 'The nawabi khazana contains absolutely tender Peri Peri chicken combined with exotic Indian spices giving you a unique spicy flavor, served with a side of creamy hummus.',
        price: 490,
        categoryId: 'g4',
        isVeg: false,
        image: '/images/nawabi_chicken.jpg',
      },
      {
        id: 'g-i6',
        name: 'TANDOORI TIKKA (BONELESS)',
        description: 'Spicy boneless chicken bites marinated with spicy tikka mix.',
        price: 190,
        categoryId: 'g4',
        isVeg: false,
      },
      {
        id: 'g-i7',
        name: 'HARIYALI CHICKEN (BONELESS)',
        description: 'Refreshing chicken pieces mixed with green mint mix and grilled well.',
        price: 190,
        categoryId: 'g4',
        isVeg: false,
      },
      {
        id: 'g-i8',
        name: 'PERI PERI HUMMUS',
        description: 'Spicy hummus with soft kubboos/naan.',
        price: 120,
        categoryId: 'g5',
        isVeg: true,
      },
      {
        id: 'g-i9',
        name: 'JALAPENO CHEESE POPPERS',
        description: 'Cheese filled jalapeno poppers fried well and crispy.',
        price: 150,
        categoryId: 'g5',
        isVeg: true,
      },
      {
        id: 'g-i10',
        name: 'CRUNCHY CHICKEN POPCORN',
        description: 'Crispy fried chicken bites dipped in sauce.',
        price: 180,
        categoryId: 'g5',
        isVeg: false,
      },
    ]
  },
  {
    name: 'Burger Inn',
    slug: 'burger-inn',
    description: 'Classic American Fast Food',
    logo: (
      <div className="w-full h-full bg-black flex items-center justify-center rounded-lg min-w-[3rem] px-2">
        <span className="text-red-600 font-black text-xs text-center leading-none uppercase">Burger<br/>Inn</span>
      </div>
    ),
    theme: {
      primary: '#eab308', // Yellow-500
      secondary: '#ef4444', // Red-500
      background: '#fefce8', // Yellow-50
      cardBg: '#ffffff',
      text: '#171717', // Neutral-900
      textMuted: '#525252', // Neutral-500
      accent: '#dc2626', // Red-600
    },
    hero: {
      image: '/images/burger_inn_bg.jpg',
      title: "BITE INTO HAPPINESS.",
      subtitle: "BIG BURGERS, BIG FLAVOUR. Quality ingredients combined.",
    },
    categories: [
      { id: 'bi1', name: 'Combos' },
      { id: 'bi2', name: 'Burgers' },
      { id: 'bi3', name: 'Sides' },
      { id: 'bi4', name: 'Drinks' },
    ],
    items: [
      {
        id: 'bi-i1',
        name: 'ZINGER BURGER COMBO',
        description: 'Crispy fried chicken Zinger burger served with a side of golden salted french fries and a chilled glass of cola.',
        price: 1299,
        categoryId: 'bi1',
        isVeg: false,
        isBestseller: true,
        image: '/images/burger_combo.jpg',
      },
      {
        id: 'bi-i2',
        name: 'Double Beef Meal',
        description: 'Double beef, double delight with crispy french fries and coke.',
        price: 1499,
        categoryId: 'bi1',
        isVeg: false,
      },
      {
        id: 'bi-i3',
        name: 'Beef Burger Combo',
        description: 'Classic beef burger with french fries and a soft drink of your choice.',
        price: 1299,
        categoryId: 'bi1',
        isVeg: false,
      },
      {
        id: 'bi-i4',
        name: 'The Royal Double Burger',
        description: 'Premium double grilled beef, melted cheese, our signature sauce with crisp lettuce and tomato on a toasted brioche bun.',
        price: 1299,
        categoryId: 'bi2',
        isVeg: false,
        isBestseller: true,
        image: '/images/burger_hero.jpg',
      },
      {
        id: 'bi-i5',
        name: 'Crunchy Cheeseburger',
        description: 'Classic cheeseburger with a crispy patty, fresh lettuce and mayo.',
        price: 899,
        categoryId: 'bi2',
        isVeg: false,
      },
      {
        id: 'bi-i6',
        name: 'Paneer Tikka Burger',
        description: 'Spicy grilled paneer tikka with mint mayo and fresh onion rings.',
        price: 999,
        categoryId: 'bi2',
        isVeg: true,
      },
      {
        id: 'bi-i7',
        name: 'Crispy Nugget Burger',
        description: 'Crunchy chicken nuggets packed inside a soft bun with lettuce.',
        price: 899,
        categoryId: 'bi2',
        isVeg: false,
      },
      {
        id: 'bi-i8',
        name: 'Special Fish Burger',
        description: 'Golden fried fish fillet with tartar sauce and fresh lettuce.',
        price: 1099,
        categoryId: 'bi2',
        isVeg: false,
      },
      {
        id: 'bi-i9',
        name: 'Crispy Peri Peri Fries Box',
        description: 'Crispy golden french fries tossed in our signature spicy peri peri seasoning.',
        price: 799,
        categoryId: 'bi3',
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 'bi-i10',
        name: 'Regular Salted Fries',
        description: 'Classic crispy fries with a touch of salt.',
        price: 450,
        categoryId: 'bi3',
        isVeg: true,
      },
      {
        id: 'bi-i11',
        name: 'Peri Peri Salted Fries',
        description: 'Fries with a spicy peri peri kick.',
        price: 550,
        categoryId: 'bi3',
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 'bi-i12',
        name: 'Cheesy Herb Fries',
        description: 'Loaded with melted cheese and herbs.',
        price: 650,
        categoryId: 'bi3',
        isVeg: true,
      },
      {
        id: 'bi-i13',
        name: 'Crispy Chicken Nuggets (6pcs)',
        description: 'Golden fried chicken nuggets.',
        price: 799,
        categoryId: 'bi3',
        isVeg: false,
      },
      {
        id: 'bi-i14',
        name: 'Lime Mint Cooler',
        description: 'Refreshing lime and mint cooler.',
        price: 500,
        categoryId: 'bi4',
        isVeg: true,
      },
      {
        id: 'bi-i15',
        name: 'Classic Iced Tea',
        description: 'Chilled iced tea with lemon.',
        price: 600,
        categoryId: 'bi4',
        isVeg: true,
      },
      {
        id: 'bi-i16',
        name: 'Mango Juice',
        description: 'Sweet and fresh mango juice.',
        price: 500,
        categoryId: 'bi4',
        isVeg: true,
      },
      {
        id: 'bi-i17',
        name: 'Belgian Choco Shake',
        description: 'Thick belgian chocolate shake.',
        price: 1200,
        categoryId: 'bi4',
        isVeg: true,
      }
    ]
  }
];
