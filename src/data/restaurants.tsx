import React from 'react';
import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    name: 'Bombay Cafe',
    slug: 'bombay-cafe',
    description: 'Chai, Shakes & Snacks',
    logo: '/images/bombay_cafe_logo.jpg',
    theme: {
      primary: '#dc2626', // Red-600
      secondary: '#ef4444', // Red-500
      background: '#ffffff', // White
      cardBg: '#fafafa', // Neutral-50
      text: '#171717', // Neutral-900
      textMuted: '#525252', // Neutral-500
      accent: '#dc2626', // Red-600
    },
    hero: {
      image: '/images/bombay_cafe_hero.jpg',
      title: "AUTHENTIC TASTE",
      subtitle: "Cafe's Fav Shakes & Juices, Our Special Chai, and Snacks.",
    },
    categories: [
      { id: 'bc1', name: "Cafe's Fav Shakes & Juices" },
      { id: 'bc3', name: 'Juices' },
      { id: 'bc4', name: 'Chai & Snacks' },
      { id: 'bc2', name: 'Our Special Chai' },
      { id: 'bc5', name: 'Chaat & Snacks' },
      { id: 'bc6', name: 'South Indian' },
      { id: 'bc7', name: 'Puffs & Hot Snacks' },
      { id: 'bc8', name: 'Fresh Bakery' },
      { id: 'bc9', name: 'Ice Cream/Desserts' },
    ],
    items: [
      // Cafe's Fav Shakes & Juices
      {
        id: 'bc-i1', name: 'Avocado Shake', description: 'Creamy avocado shake blended to perfection.',
        price: 150, categoryId: 'bc1', isVeg: true, isBestseller: true, image: '/images/bombay_cafe_shake.jpg',
      },
      {
        id: 'bc-i1a', name: 'Mango Shake', description: 'Fresh seasonal mangoes blended with thick milk.',
        price: 120, categoryId: 'bc1', isVeg: true, image: '/images/bombay_cafe_mango_shake.jpg',
      },
      
      // Juices
      {
        id: 'bc-i2', name: 'Fresh Mixed Juice', description: 'Refreshing glass of mixed fruit juice.',
        price: 90, categoryId: 'bc3', isVeg: true, image: '/images/bombay_cafe_juice.jpg',
      },
      {
        id: 'bc-i2a', name: 'Orange Juice', description: 'Freshly squeezed sweet oranges.',
        price: 80, categoryId: 'bc3', isVeg: true, image: '/images/bombay_cafe_orange_juice.jpg',
      },

      // Chai & Snacks
      {
        id: 'bc-i5', name: 'Samosa & Pakora Platter', description: 'Crispy samosas and pakoras served with mint and tamarind chutney.',
        price: 120, categoryId: 'bc4', isVeg: true, image: '/images/bombay_cafe_snacks.jpg',
      },
      {
        id: 'bc-i6', name: 'Vada Pav', description: 'Classic Mumbai street food snack.',
        price: 60, categoryId: 'bc4', isVeg: true,
      },
      {
        id: 'bc-i6a', name: 'Bun Maska', description: 'Soft bun slathered with rich butter.',
        price: 40, categoryId: 'bc4', isVeg: true,
      },

      // Our Special Chai
      {
        id: 'bc-i3', name: 'Masala Chai', description: 'Traditional Indian chai brewed with aromatic spices.',
        price: 40, categoryId: 'bc2', isVeg: true, isBestseller: true, image: '/images/bombay_cafe_masala_chai.jpg',
      },
      {
        id: 'bc-i4', name: 'Elayichi Chai', description: 'Aromatic cardamom tea served hot.',
        price: 35, categoryId: 'bc2', isVeg: true, image: '/images/bombay_cafe_elayichi_chai.jpg',
      },

      // Chaat & Snacks
      {
        id: 'bc-c1', name: 'Pani Puri', description: 'Crispy puris stuffed with spicy water and potato.',
        price: 60, categoryId: 'bc5', isVeg: true,
      },
      {
        id: 'bc-c2', name: 'Bhel Puri', description: 'Puffed rice mixed with chutneys and veggies.',
        price: 70, categoryId: 'bc5', isVeg: true,
      },

      // South Indian
      {
        id: 'bc-s1', name: 'Masala Dosa', description: 'Crispy crepe filled with spiced potato curry.',
        price: 90, categoryId: 'bc6', isVeg: true,
      },
      {
        id: 'bc-s2', name: 'Idli Sambar', description: 'Steamed rice cakes served with lentil soup.',
        price: 70, categoryId: 'bc6', isVeg: true,
      },

      // Puffs & Hot Snacks
      {
        id: 'bc-p1', name: 'Veg Puff', description: 'Flaky pastry filled with mixed vegetables.',
        price: 30, categoryId: 'bc7', isVeg: true, image: '/images/bombay_cafe_puffs.jpg',
      },
      {
        id: 'bc-p2', name: 'Egg Puff', description: 'Flaky pastry filled with spiced egg masala.',
        price: 35, categoryId: 'bc7', isVeg: false,
      },
      {
        id: 'bc-p3', name: 'Chicken Puff', description: 'Flaky pastry filled with spiced minced chicken.',
        price: 45, categoryId: 'bc7', isVeg: false,
      },
      {
        id: 'bc-c1', name: 'Veg Cutlet', description: 'Crispy fried mixed vegetable patties.',
        price: 25, categoryId: 'bc7', isVeg: true,
      },
      {
        id: 'bc-c2', name: 'Beef Cutlet', description: 'Kerala style spicy beef cutlet.',
        price: 35, categoryId: 'bc7', isVeg: false,
      },
      {
        id: 'bc-c3', name: 'Chicken Cutlet', description: 'Crispy fried minced chicken patties.',
        price: 35, categoryId: 'bc7', isVeg: false,
      },
      {
        id: 'bc-s3', name: 'Punjabi Samosa', description: 'Classic large samosa with potato filling.',
        price: 20, categoryId: 'bc7', isVeg: true,
      },

      // Fresh Bakery
      {
        id: 'bc-b3', name: 'Chocolate Cake (Slice)', description: 'Rich chocolate sponge cake.',
        price: 80, categoryId: 'bc8', isVeg: true,
      },
      {
        id: 'bc-b4', name: 'Black Forest', description: 'Classic black forest pastry with cherry.',
        price: 90, categoryId: 'bc8', isVeg: true,
      },

      // Ice Cream/Desserts
      {
        id: 'bc-d1', name: 'Vanilla Ice Cream', description: 'Two scoops of classic vanilla.',
        price: 70, categoryId: 'bc9', isVeg: true,
      },
      {
        id: 'bc-d2', name: 'Royal Falooda', description: 'Rich falooda with dry fruits and ice cream.',
        price: 150, categoryId: 'bc9', isVeg: true, isBestseller: true,
      }
    ]
  },
  {
    name: 'Grillo',
    slug: 'grillo',
    description: 'Get it grilled',
    logo: '/images/grillo_logo_real.png',
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
      image: '/images/grillo_alpham.png', // Grill placeholder
      title: "FIRE. FLAVOUR. GRILLO.",
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
        image: '/images/grillo_alpham.png',
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
  },
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
    name: 'Wokyo',
    slug: 'wokyo',
    description: 'Noodle Bar',
    logo: '/images/wokyo_logo.jpg',
    theme: {
      primary: '#d97736',
      secondary: '#c86625', 
      background: '#d97736',
      cardBg: '#ffffff',
      text: '#171717',
      textMuted: '#525252',
      accent: '#d97736',
    },
    hero: {
      image: '',
      title: "SUPPER CLUB",
      subtitle: "Al Maktoum, Mangolya Art - Shinjuku Street Sign",
    },
    categories: [
      { id: 'w1', name: 'STRAIGHT FROM THE WOK' },
      { id: 'w2', name: 'GYOZA CRAFT' },
      { id: 'w3', name: 'RAMEN SANCTUARY' },
      { id: 'w4', name: 'SWEET TOOTH & FINISH' },
      { id: 'w5', name: 'HOUSE SIPS & SODA' }
    ],
    items: [
      {
        id: 'w-i1', name: 'SIGNATURE HO FUN', description: 'Flash-seared flat wide rice ribbons, sweet roasted greens, charred scallion oil.', price: 580, categoryId: 'w1', isVeg: false, image: '/images/wokyo_ho_fun.jpg'
      },
      {
        id: 'w-i2', name: 'STIR FRIED BROCCOLI', description: 'Flash blistered with roasted Sichuan pepper, garlic crunch, finished in reduced savory chicken broth or house vegan glaze.', price: 390, categoryId: 'w1', isVeg: true
      },
      {
        id: 'w-g1', name: 'CRISPY SKIRT GYOZA (6 PCS)', description: 'Pan-seared with thin starch lace veil until shatter-crispy. Served with chili sesame vinaigrette.', price: 420, categoryId: 'w2', isVeg: false, image: '/images/wokyo_gyoza.jpg'
      },
      {
        id: 'w-r1', name: 'MASTER SHOYU RAMEN', description: 'Slow-extracted rich bone marrow broth infused with 24-month aged artisan Shoyu blend, cloudy tare, topped with rolled pork belly chashu, jammy ajitsuke tamago, roasted nori, and house rayu.', price: 580, categoryId: 'w3', isVeg: false, image: '/images/wokyo_ramen.jpg'
      },
      {
        id: 'w-s1', name: 'CINNAMON DOUGHNUTS', description: 'Warm airy Japanese yeast doughnut puffs, rolled in Ceylon cinnamon sugar, served with warm macerated strawberry and yuzu compote.', price: 340, categoryId: 'w4', isVeg: true, image: '/images/wokyo_doughnuts.jpg'
      },
      {
        id: 'w-d1', name: 'TOKYO YUZU LEMONADE', description: 'Pressed Kochi yuzu juice, sparkling mountain water, sea salt rim.', price: 220, categoryId: 'w5', isVeg: true
      },
      {
        id: 'w-d2', name: 'ROASTED MUGICHA HIGHBALL (ZERO-PROOF)', description: 'Cold brewed roasted barley, dark brown sugar splash, fever-tree soda.', price: 220, categoryId: 'w5', isVeg: true
      }
    ]
  }
];
