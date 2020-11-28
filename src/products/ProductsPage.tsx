import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsTopPanel from "./ProductsTopPanel";
import CategoriesBlock from "./CategoriesBlock";
import ProductsManager from "./ProductsManager";

import categoriesResponce from "./categoriesResponce.json";
import productsResponce from "./productsResponce.json";
import { useHistory, useLocation } from "react-router-dom";

const ProductsPage: React.FC = () => {
  let history = useHistory();
  const [showActive, setShowActive] = useState(true);
  const [categories, setCategories] = useState(categoriesResponce);
  const [activeCategories, setActiveCategories] = useState(
    categories.active.map((obj) => {
      return { name: obj.name, id: obj.id };
    })
  );
  const [inactiveCategories, setInactiveCategories] = useState(
    categories.inactive.map((obj) => {
      return { name: obj.name, id: obj.id };
    })
  );
  const [activeCategoryInfo, setActiveCategoryInfo] = useState({
    name: categoriesResponce.active[0].name,
    id: categoriesResponce.active[0].id,
  });
  const [activeProducts, setActiveProducts] = useState<
    {
      name: string;
      price: number;
      measure: string;
    }[]
  | null>(null);

  const getActiveCategory = () => {
    return showActive
      ? categories.active.find((x) => x.id === activeCategoryInfo.id)
      : categories.inactive.find((x) => x.id === activeCategoryInfo.id);
  };

  //useEffect axios + default route
  useEffect(() => {
    // ajax categoryId -> products
    productsResponce.categoryId === activeCategoryInfo.id
      ? setActiveProducts(productsResponce.products)
      : setActiveProducts(null);
    history.replace(
      `/Товары/${showActive ? "active" : "inactive"}/${activeCategoryInfo.name}`
    );
  }, [activeCategoryInfo]);

  const onAddCategory = () => {
    alert("addCat");
  };

  const onClickCategoryType = (isActive: boolean) => {
    setShowActive(isActive);
  };

  return (
    <ProductsContainer>
      <ProductsTopPanel />
      <CategoriesBlock
        activeCategories={activeCategories}
        inactiveCategories={inactiveCategories}
        currentCategory={activeCategoryInfo}
        onClickCategory={setActiveCategoryInfo}
        showActiveType={showActive}
        onClickType={onClickCategoryType}
      />

      <ProductsManager
        categoryInfo={activeCategoryInfo}
        activeCategory={getActiveCategory()}
        activeProducts={activeProducts}
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
