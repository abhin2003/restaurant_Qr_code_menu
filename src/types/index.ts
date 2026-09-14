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
};

export type MenuCategory = {
  id: string;
  name: string;
};

export type Restaurant = {
  slug: string;
  name: string;
  description: string;
  logo: string;
  theme: Theme;
  categories: MenuCategory[];
  items: MenuItem[];
};
