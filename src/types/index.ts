import React from 'react';

export type Theme = {
  primary: string;
  secondary: string;
  background: string;
  cardBg: string;
  text: string;
  textMuted: string;
  accent: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  categoryId: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isBestseller?: boolean;
  cardStyle?: 'horizontal' | 'vertical'; // Layout of the card
};

export type MenuCategory = {
  id: string;
  name: string;
};

export type RestaurantHero = {
  image: string;
  title: string;
  subtitle: string;
};

export type Restaurant = {
  slug: string;
  name: string;
  description: string;
  logo: string | React.ReactNode;
  theme: Theme;
  hero: RestaurantHero;
  categories: MenuCategory[];
  items: MenuItem[];
};
