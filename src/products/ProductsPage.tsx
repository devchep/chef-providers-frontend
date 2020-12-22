import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsTopPanel from "./ProductsTopPanel/ProductsTopPanel";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import ProductsManager from "./ProductsManager";

import categoriesResponce from "./requests/categoriesResponce.json";
import productsResponce from "./requests/productsResponce.json";
import categoryProductsResponce from "./requests/categoryProductsResponce.json";
import { useHistory } from "react-router-dom";
import { CategoryCard, CategoryInfo, SubcategoryInfo, ProductInfo } from "./types";

const ProductsPage: React.FC = () => {
  let history = useHistory();
  const [categories, setCategories] = useState(categoriesResponce);
  const [activeCategories, setActiveCategories] = useState<CategoryCard[]>(
    categories.active.map((obj) => {
      return { name: obj.name, id: obj.id };
    })
  );
  const [activeCategoryInfo, setActiveCategoryInfo] = useState<CategoryInfo | undefined>(
    categoriesResponce.active[0]
  );
  const [activeProducts, setActiveProducts] = useState<
    ProductInfo[] | undefined
  >(undefined);
  const [activeSubcategory, setActiveSubcategory] = useState<
    SubcategoryInfo | undefined
  >(undefined);

  // ajax category -> CategoryInfo
  const getActiveCategory = (categoryId: number) => {
    return categories.active.find((x) => x.id === categoryId);
  };

  useEffect(() => {
    // ajax categoryId -> ProductInfo list
    activeCategoryInfo?.id === 3
      ? setActiveProducts(categoryProductsResponce.products)
      : setActiveProducts(undefined);
    history.replace(`/Товары/${activeCategoryInfo?.name}`);
  }, []);

  const onClickCategory = (categoryCard: CategoryCard) => {
    setActiveCategoryInfo(getActiveCategory(categoryCard.id));
    categoryCard.id === 3
      ? setActiveProducts(categoryProductsResponce.products)
      : setActiveProducts(undefined);
    history.replace(`/Товары/${categoryCard.name}`);
  };

  const onClickSubcategory = (subcategoryInfo: SubcategoryInfo) => {
    // ajax categoryId + subcategoryId -> ProductInfo list
    setActiveSubcategory(subcategoryInfo);
    setActiveProducts(
      productsResponce.subcategories.find(
        (x) => x.subcategoryId === subcategoryInfo.id
      )?.products
    );
    history.push(`/Товары/${activeCategoryInfo?.name}/${subcategoryInfo.name}`);
  };
  // TODO: add new category to activeCategories
  const onAddCategory = () => {
    alert("addCat");
  };

  return (
    <ProductsContainer>
      <ProductsTopPanel />
      <CategoriesBlock
        activeCategories={activeCategories}
        currentCategory={activeCategoryInfo}
        onClickCategory={onClickCategory}
      />

      <ProductsManager
        activeCategory={activeCategoryInfo}
        activeSubcategory={activeSubcategory}
        activeProducts={activeProducts}
        onClickSubcategory={onClickSubcategory}
        onGoBackToCategory={onClickCategory}
      />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  min-height: 88vh;
  max-height: 88vh;
  display: grid;
  grid-template-columns: 1.4fr 2fr 2fr;
  grid-auto-rows: 1fr 2fr 2fr;
  grid-template-areas:
    "topPanel topPanel topPanel"
    "categoriesBlock productsManager productsManager"
    "categoriesBlock productsManager productsManager"
    "categoriesBlock productsManager productsManager";
`;

export default ProductsPage;
