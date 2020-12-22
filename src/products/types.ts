export type CategoryCard = {
  id: number;
  name: string;
}

export type SubcategoryInfo = {
  id: number;
  name: string;
  amount: number;
  isActive: boolean;
};

export type CategoryInfo = {
  id: number;
  name: string;
  amount: number;
  subcategories: SubcategoryInfo[];
};

export type ProductInfo = {
  id: number;
  name: string;
  price: number;
  measure: string;
  isActive: boolean;
};
