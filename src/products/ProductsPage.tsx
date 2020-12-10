import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsTopPanel from "./ProductsTopPanel";
import CategoriesBlock from "./CategoriesBlock";
import ProductsManager from "./ProductsManager";

import categoriesResponce from "./requests/categoriesResponce.json";
import productsResponce from "./requests/productsResponce.json";
import { useHistory } from "react-router-dom";

const ProductsPage: React.FC = () => {
  let history = useHistory();
  const [categories, setCategories] = useState(categoriesResponce);
  const [activeCategories, setActiveCategories] = useState(
    categories.active.map((obj) => {
      return { name: obj.name, id: obj.id };
    })
  );
  const [activeCategoryInfo, setActiveCategoryInfo] = useState({
    name: categoriesResponce.active[0].name,
    id: categoriesResponce.active[0].id,
  });
  const [activeProducts, setActiveProducts] = useState<
    | {
        id: number;
        name: string;
        price: number;
        measure: string;
        isActive: boolean
      }[]
    | undefined
  >(undefined);
  const [activeSubcategory, setActiveSubcategory] = useState("");

  const getActiveCategory = () => {
    return categories.active.find((x) => x.id === activeCategoryInfo.id);
  };

  useEffect(() => {
    // ajax categoryId -> products
    productsResponce.categoryId === activeCategoryInfo.id
      ? setActiveProducts(productsResponce.products)
      : setActiveProducts(undefined);
    history.replace(`/Товары/${activeCategoryInfo.name}`);
  }, []);

  const onClickCategory = (name: string, id: number) => {
    setActiveCategoryInfo({ name, id });
    productsResponce.categoryId === id
      ? setActiveProducts(productsResponce.products)
      : setActiveProducts(undefined);
    history.replace(`/Товары/${name}`);
  };

  const onClickSubcategory = (subcategoryId: number, categoryName: string) => {
    // ajax categoryId + subcategoryId -> products
    setActiveSubcategory(categoryName);
    setActiveProducts(
      productsResponce.subcategories.find(
        (x) => x.subcategoryId === subcategoryId
      )?.products
    );
    history.push(`/Товары/${activeCategoryInfo.name}/${categoryName}`);
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
        categoryInfo={activeCategoryInfo}
        activeCategory={getActiveCategory()}
        activeSubcategory={activeSubcategory}
        activeProducts={activeProducts}
        onClickSubcategory={onClickSubcategory}
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
