export type User = {
  id: number;
  userEmail: string;
} | null;

export type CategoryCard = {
  id: number;
  name: string;
};

export type SubcategoryInfo = {
  id: number;
  name: string;
  // amount: number;
  isShown: boolean;
};

export type CategoryInfo = {
  id: number;
  name: string;
  amount: number;
  subcategories: SubcategoryInfo[];
};

export type ProductInfo = {
  id: number;
  subcategoryId: number;
  name: string;
  amount: number;
  description: string;
  price: number;
  measure: string;
  isShown: boolean;
};
